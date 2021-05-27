const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_song'

/**
 *  @swagger
 *  tags:
 *    name: song
 *    description: API to manage User.
 */

/**
 * @swagger
 * /song:
 *  get:
 *    summary: Get song data list.
 *    tags: [song]
 *    responses:
 *      200:
 *        description: Get song data list
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
 * /song/{id}:
 *  get:
 *    summary: Get song data.
 *    tags: [song]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: song PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get song data object
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
 * /song:
 *  post:
 *    summary: Insert song data.
 *    tags: [song]
 *    parameters:
 *      - in: body
 *        name: song
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
 *        description: Insert song data
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
 * /song/{id}:
 *  put:
 *    summary: Update song data.
 *    tags: [song]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: song PK
 *        type: Integer
 *      - in: body
 *        name: song
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
 *        description: Update song data
 */
router.put('/:id', async function (req, res, next) {
  try {
    let query = await Database.insert(TABLE_NAME, req.body, {
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
 * /song/{id}:
 *  delete:
 *    summary: Delete song data.
 *    tags: [song]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: song PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete song data
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
