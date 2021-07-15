const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_board'

/**
 *  @swagger
 *  tags:
 *    name: board
 *    description: API to manage User.
 */

/**
 * @swagger
 * /board:
 *  get:
 *    summary: Get board data list.
 *    tags: [board]
 *    responses:
 *      200:
 *        description: Get board data list
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
 * /board/{id}:
 *  get:
 *    summary: Get board data.
 *    tags: [board]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: board PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get board data object
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
 * /board:
 *  post:
 *    summary: Insert board data.
 *    tags: [board]
 *    parameters:
 *      - in: body
 *        name: board
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            user_id:
 *              type: int
 *            title:
 *              type: string
 *            image_url:
 *              type: string
 *            contents:
 *              type: string
 *            created_at:
 *              type: string
 *            updated_at:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert board data
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
 * /board/{id}:
 *  put:
 *    summary: Update board data.
 *    tags: [board]
 *    parameters:
 *      - in: body
 *        name: board
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            user_id:
 *              type: int
 *            title:
 *              type: string
 *            image_url:
 *              type: string
 *            contents:
 *              type: string
 *            created_at:
 *              type: string
 *            updated_at:
 *              type: string
 *    responses:
 *      200:
 *        description: Update board data
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
        .json({ resultCode: 'fail', resultMsg: '[ERROR] BOARD NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /board/{id}:
 *  delete:
 *    summary: Delete board data.
 *    tags: [board]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: board PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete board data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] BOARD NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
