const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_album'

/**
 *  @swagger
 *  tags:
 *    name: album
 *    description: API to manage User.
 */

/**
 * @swagger
 * /album:
 *  get:
 *    summary: Get album data list.
 *    tags: [album]
 *    responses:
 *      200:
 *        description: Get album data list
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
 * /album/{id}:
 *  get:
 *    summary: Get album data.
 *    tags: [album]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: album PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get album data object
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
 * /album:
 *  post:
 *    summary: Insert album data.
 *    tags: [album]
 *    parameters:
 *      - in: body
 *        name: album
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            album_name:
 *              type: string
 *            album_type:
 *              type: string
 *            cover_image:
 *              type: string
 *            release_data:
 *              type: string
 *            links:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  site:
 *                    type: string
 *                  link:
 *                    type: string
 *    responses:
 *      200:
 *        description: Insert album data
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
 * /album/{id}:
 *  put:
 *    summary: Update album data.
 *    tags: [album]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: album PK
 *        type: Integer
 *      - in: body
 *        name: album
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            titles:
 *              type: array
 *              items:
 *                type: string
 *            tracks:
 *              type: array
 *              items:
 *                type: string
 *            cover:
 *              type: string
 *            desc:
 *              type: string
 *            release_data:
 *              type: string
 *            links:
 *              type: array
 *              items:
 *                type: string
 *    responses:
 *      200:
 *        description: Update album data
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
 * /album/{id}:
 *  delete:
 *    summary: Delete album data.
 *    tags: [album]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: album PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete album data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] ALBUM NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
