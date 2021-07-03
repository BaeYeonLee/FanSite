const express = require('express')
const router = express.Router()

const History = require('../../models/history.js')

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
router.get('/', function (req, res, next) {
  History.find(req.query, function (err, history) {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(history)
  })
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
router.get('/:id', function (req, res, next) {
  History.findById(req.params.id, (err, history) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }
    res.status(200).json(history)
  })
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
 *            date:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert history data
 */
router.post('/', function (req, res, next) {
  let history = new History({ ...req.body })

  history.save((err, history) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(history)
  })
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
 *            date:
 *              type: string
 *    responses:
 *      200:
 *        description: Update history data
 */
router.put('/:id', function (req, res, next) {
  let upadetData = { ...req.body }

  History.findByIdAndUpdate(
    req.params.id,
    upadetData,
    { new: true },
    (err, history) => {
      if (err) {
        return res.status(500).send({ error: 'database failure', msg: err })
      }

      res.status(200).json(history)
    },
  )
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
  History.findByIdAndRemove(req.params.id, (err, history) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(history)
  })
})

module.exports = router
