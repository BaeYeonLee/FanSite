const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_user'

/**
 *  @swagger
 *  tags:
 *    name: user
 *    description: API to manage User.
 */

/**
 * @swagger
 * /user:
 *  get:
 *    summary: Get user data list.
 *    tags: [user]
 *    responses:
 *      200:
 *        description: Get user data list
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
 * /user/{id}:
 *  get:
 *    summary: Get user data.
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: user PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get user data object
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
 * /user:
 *  post:
 *    summary: Insert user data.
 *    tags: [user]
 *    parameters:
 *      - in: body
 *        name: user
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            TBD
 *    responses:
 *      200:
 *        description: Insert user data
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
 * /user/{id}:
 *  put:
 *    summary: Update user data.
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: user PK
 *        type: Integer
 *      - in: body
 *        name: user
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            TBD
 *    responses:
 *      200:
 *        description: Update user data
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
        .json({ resultCode: 'fail', resultMsg: '[ERROR] USER NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /user/{id}:
 *  delete:
 *    summary: Delete user data.
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: user PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete user data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] USER NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
