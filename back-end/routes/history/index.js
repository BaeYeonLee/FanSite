const express = require('express')
const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_history'

/**
 *  @swagger
 *  tags:
 *    name: history
 *    description: API to manage History.
 */

/**
 * @swagger
 * /history:
 *  get:
 *    summary: Get history data list.
 *    tags: [history]
 *    responses:
 *      200:
 *        description: Get history data list
 */
router.get('/', async function (req, res, next) {
  try {
    let query = await Database.select(TABLE_NAME, [], req.query)

    res.status(200).json(query)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /history/{id}:
 *  get:
 *    summary: Get history data.
 *    tags: [history]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: history PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get history data object
 */
router.get('/:id', async function (req, res, next) {
  try {
    let query = await Database.select(TABLE_NAME, [], { id: req.params.id })

    if (query.length == 1) {
      res.status(200).json(query[0])
    } else {
      res.status(200).json(query)
    }
  } catch (e) {
    console.log(e.message)
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /history:
 *  post:
 *    summary: Insert history data.
 *    tags: [history]
 *    parameters:
 *      - in: body
 *        name: history
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            desc:
 *              type: string
 *            year:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert history data
 */
router.post('/', async function (req, res, next) {
  try {
    let query = await Database.insert(TABLE_NAME, req.body)

    res.status(200).json(query)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /history/{id}:
 *  put:
 *    summary: Update history data.
 *    tags: [history]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: history PK
 *        type: Integer
 *      - in: body
 *        name: history
 *        required: true
 *        properties:
 *            title:
 *              type: string
 *            desc:
 *              type: string
 *            year:
 *              type: string
 *    responses:
 *      200:
 *        description: Update history data
 */
router.put('/:id', async function (req, res, next) {
  try {
    let query = await Database.update(TABLE_NAME, req.body, {
      id: req.params.id,
    })

    if (query != 'NOT FOUND') {
      res.status(200).json(query)
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] HISTORY NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /history/{id}:
 *  delete:
 *    summary: Delete history data.
 *    tags: [history]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: history PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete history data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] HISTORY NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
