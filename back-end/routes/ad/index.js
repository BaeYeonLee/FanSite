const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_ad'

/**
 *  @swagger
 *  tags:
 *    name: advertising
 *    description: API to manage User.
 */

/**
 * @swagger
 * /ad:
 *  get:
 *    summary: Get advertising data list.
 *    tags: [advertising]
 *    responses:
 *      200:
 *        description: Get advertising data list
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
 * /ad/{id}:
 *  get:
 *    summary: Get advertising data.
 *    tags: [advertising]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: advertising PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get advertising data object
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
 * /ad:
 *  post:
 *    summary: Insert advertising data.
 *    tags: [advertising]
 *    parameters:
 *      - in: body
 *        name: advertising
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            year:
 *              type: string
 *            image_url:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert advertising data
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
 * /ad/{id}:
 *  put:
 *    summary: Update advertising data.
 *    tags: [advertising]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: advertising PK
 *        type: Integer
 *      - in: body
 *        name: advertising
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            year:
 *              type: string
 *            image_url:
 *              type: string
 *    responses:
 *      200:
 *        description: Update advertising data
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
        .json({ resultCode: 'fail', resultMsg: '[ERROR] ALBUM NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /ad/{id}:
 *  delete:
 *    summary: Delete advertising data.
 *    tags: [advertising]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: advertising PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete advertising data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] ADVERTISING NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
