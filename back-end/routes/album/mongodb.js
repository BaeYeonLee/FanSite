const express = require('express')
const router = express.Router()

const Album = require('../../models/album.js')

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
router.get('/', function (req, res, next) {
  Album.find(req.query, function (err, album) {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(album)
  })
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
router.get('/:id', function (req, res, next) {
  Album.findById(req.params.id, (err, album) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }
    res.status(200).json(album)
  })
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
 *        description: Insert album data
 */
router.post('/', function (req, res, next) {
  let album = new Album({ ...req.body })

  album.save((err, album) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(album)
  })
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
router.put('/:id', function (req, res, next) {
  let upadetData = { ...req.body }

  Album.findByIdAndUpdate(
    req.params.id,
    upadetData,
    { new: true },
    (err, album) => {
      if (err) {
        return res.status(500).send({ error: 'database failure', msg: err })
      }

      res.status(200).json(album)
    },
  )
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
  Album.findByIdAndRemove(req.params.id, (err, album) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(album)
  })
})

module.exports = router
