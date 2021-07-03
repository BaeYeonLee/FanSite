const mysql = require('mysql2')

const config = require('../config/mysql')

function setConditions(where_obj) {
  let result = []
  if (Object.keys(where_obj).length > 0) {
    result.push('WHERE')

    Object.keys(where_obj).forEach(key => {
      let value = where_obj[key]

      if (typeof value == 'string') {
        result.push(`${key}='${value}'`)
      } else {
        result.push(`${key}=${value}`)
      }

      result.push('AND')
    })

    result.pop()
  }

  return result.join(' ')
}

class Database {
  constructor() {
    this.pool = mysql.createPool(config)
  }

  /**
   * Execute sql query
   * @param  {String} sql - SQL Query.
   */
  async execute(sql) {
    const promise = this.pool.promise()

    try {
      const [rows] = await promise.query(sql)
      return rows
    } catch (e) {
      console.log('[ERROR] execute')
      console.log(e.message)
      throw Error(e)
    }
  }

  /**
   * Select Data
   * @param  {String} table_nm - Table name to retrieve data.
   * @param  {Array} column_list - Column list to retrieve ( ex: ['id', 'name'] )
   * @param  {Object} where_obj - Object for where conditions ( ex: {'id': 1, 'name': 'NAME'} )
   */
  select(table_nm, column_list = [], where_obj = {}) {
    let sql_list = ['SELECT']

    // Set select column
    if (column_list.length > 0) {
      sql_list.push(column_list.join())
    } else {
      sql_list.push('*')
    }

    sql_list.push(`FROM ${table_nm}`)

    // Set update confitions
    sql_list.push(setConditions(where_obj))

    let query = sql_list.join(' ')

    return this.execute(query)
  }

  /**
   * Insert Data
   * @param  {String} table_nm - Table name to retrieve data.
   * @param  {Object} insert_data - Object to insert data ( ex: {'id': 1, 'name': 'NAME'} )
   */
  async insert(table_nm, insert_data) {
    let keys = []
    let values = []

    Object.keys(insert_data).forEach(key => {
      // Set key
      keys.push(key)
      // Set values
      let value = insert_data[key]

      if (typeof value == 'string') {
        values.push(`'${value}'`)
      } else if (typeof value == 'object') {
        let replaceValue = JSON.stringify(value)

        values.push(`'${replaceValue}'`)
      } else {
        values.push(`${value}`)
      }
    })

    let query = `INSERT INTO ${table_nm} (${keys.join()}) VALUES (${values.join()})`

    let result = await this.execute(query)

    return this.select(table_nm, [], { id: result.insertId })
  }

  /**
   * Update Data
   * @param  {String} table_nm - Table name to retrieve data.
   * @param  {Array} column_list - Column list to retrieve ( ex: ['id', 'name'] )
   * @param  {Object} where_obj - Object for where conditions ( ex: {'id': 1, 'name': 'NAME'} )
   */
  async update(table_nm, update_data, where_obj = {}) {
    let sql_list = [`UPDATE ${table_nm} SET`]

    // Set update Column
    let updateData = []
    Object.keys(update_data).forEach(key => {
      let value = update_data[key]

      if (typeof value == 'string') {
        updateData.push(`${key}='${value}'`)
      } else {
        updateData.push(`${key}=${value}`)
      }
    })

    let updateTxt = updateData.join(',')
    sql_list.push(updateTxt)

    // Set update confitions
    sql_list.push(setConditions(where_obj))

    let query = sql_list.join(' ')
    let result = await this.execute(query)

    if (result.affectedRows > 0) {
      return this.select(table_nm, [], { id: update_data.id })
    } else {
      return 'NOT FOUND'
    }
  }

  /**
   * Delete Data
   * @param  {String} table_nm - Table name to retrieve data.
   * @param  {Array} column_list - Column list to retrieve ( ex: ['id', 'name'] )
   * @param  {Object} where_obj - Object for where conditions ( ex: {'id': 1, 'name': 'NAME'} )
   */
  async delete(table_nm, where_obj = {}) {
    let sql_list = [`DELETE FROM ${table_nm}`]

    // Set update confitions
    sql_list.push(setConditions(where_obj))

    let query = sql_list.join(' ')
    return this.execute(query)
  }
}

let database = new Database()
module.exports = database
