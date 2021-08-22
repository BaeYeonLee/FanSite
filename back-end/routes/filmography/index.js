const express = require('express')

const router = express.Router()

const Database = require('../../mysql')

const TABLE_NAME = 't_filmography'

/**
 *  @swagger
 *  tags:
 *    name: filmography
 *    description: API to manage User.
 */

/**
 * @swagger
 * /filmography:
 *  get:
 *    summary: Get filmography data list.
 *    tags: [filmography]
 *    responses:
 *      200:
 *        description: Get filmography data list
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
 * /filmography/{id}:
 *  get:
 *    summary: Get filmography data.
 *    tags: [filmography]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: filmography PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get filmography data object
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
 * /filmography:
 *  post:
 *    summary: Insert filmography data.
 *    tags: [filmography]
 *    parameters:
 *      - in: body
 *        name: filmography
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            cast:
 *              type: string
 *            start_date:
 *              type: string
 *            end_data:
 *              type: string
 *            image:
 *              type: string
 *            links:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert filmography data
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
 * /filmography/{id}:
 *  put:
 *    summary: Update filmography data.
 *    tags: [filmography]
 *    parameters:
 *      - in: body
 *        name: filmography
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            cast:
 *              type: string
 *            start_date:
 *              type: string
 *            end_data:
 *              type: string
 *            image:
 *              type: string
 *            links:
 *              type: string
 *    responses:
 *      200:
 *        description: Update filmography data
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
        .json({ resultCode: 'fail', resultMsg: '[ERROR] FILMOGRAPHY NOT FOUND' })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

/**
 * @swagger
 * /filmography/{id}:
 *  delete:
 *    summary: Delete filmography data.
 *    tags: [filmography]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: filmography PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete filmography data
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let query = await Database.delete(TABLE_NAME, { id: req.params.id })

    if (query.affectedRows > 0) {
      res.status(200).json({ resultCode: 'success' })
    } else {
      res
        .status(400)
        .json({
          resultCode: 'fail',
          resultMsg: '[ERROR] FILMOGRAPHY NOT FOUND',
        })
    }
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
