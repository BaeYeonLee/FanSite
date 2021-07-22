const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_track'

/**
 *  @swagger
 *  tags:
 *    name: track
 *    description: API to manage User.
 */

/**
 * @swagger
 * /track:
 *  get:
 *    summary: Get track data list.
 *    tags: [track]
 *    responses:
 *      200:
 *        description: Get track data list
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
 * /track/{id}:
 *  get:
 *    summary: Get track data.
 *    tags: [track]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: track PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get track data object
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
 * /track:
 *  post:
 *    summary: Insert track data.
 *    tags: [track]
 *    parameters:
 *      - in: body
 *        name: track
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            album_id:
 *              type: int
 *            track_no:
 *              type: int
 *            name:
 *              type: string
 *            lyric:
 *              type: string
 *            composed:
 *              type: string
 *            arranged:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert track data
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
 * /track/{id}:
 *  put:
 *    summary: Update track data.
 *    tags: [track]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: track PK
 *        type: Integer
 *      - in: body
 *        name: track
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            album_id:
 *              type: int
 *            track_no:
 *              type: int
 *            name:
 *              type: string
 *            lyric:
 *              type: string
 *            composed:
 *              type: string
 *            arranged:
 *              type: string
 *    responses:
 *      200:
 *        description: Update track data
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
        .json({ resultCode: 'fail', resultMsg: '[ERROR] TRACK NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /track/{id}:
 *  delete:
 *    summary: Delete track data.
 *    tags: [track]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: track PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete track data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({ resultCode: 'fail', resultMsg: '[ERROR] TRACK NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
