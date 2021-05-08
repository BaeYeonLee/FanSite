const express = require('express')
const router = express.Router()

const Program = require('../../models/program.js')

/**
 *  @swagger
 *  tags:
 *    name: program
 *    description: API to manage User.
 */

/**
 * @swagger
 * /program:
 *  get:
 *    summary: Get program data list.
 *    tags: [program]
 *    responses:
 *      200:
 *        description: Get program data list
 */
router.get('/', function (req, res, next) {
  Program.find(req.query, function (err, program) {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(program)
  })
})

/**
 * @swagger
 * /program/{id}:
 *  get:
 *    summary: Get program data.
 *    tags: [program]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: program PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Get program data object
 */
router.get('/:id', function (req, res, next) {
  Program.findById(req.params.id, (err, program) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }
    res.status(200).json(program)
  })
})

/**
 * @swagger
 * /program:
 *  post:
 *    summary: Insert program data.
 *    tags: [program]
 *    parameters:
 *      - in: body
 *        name: program
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            role:
 *              type: string
 *            start_date:
 *              type: string
 *            end_date:
 *              type: string
 *    responses:
 *      200:
 *        description: Insert program data
 */
router.post('/', function (req, res, next) {
  let program = new Program({ ...req.body })

  program.save((err, program) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(program)
  })
})

/**
 * @swagger
 * /program/{id}:
 *  put:
 *    summary: Update program data.
 *    tags: [program]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: program PK
 *        type: Integer
 *      - in: body
 *        name: program
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            role:
 *              type: string
 *            start_date:
 *              type: string
 *            end_date:
 *              type: string
 *    responses:
 *      200:
 *        description: Update program data
 */
router.put('/:id', function (req, res, next) {
  let upadetData = { ...req.body }

  Program.findByIdAndUpdate(
    req.params.id,
    upadetData,
    { new: true },
    (err, program) => {
      if (err) {
        return res.status(500).send({ error: 'database failure', msg: err })
      }

      res.status(200).json(program)
    },
  )
})

/**
 * @swagger
 * /program/{id}:
 *  delete:
 *    summary: Delete program data.
 *    tags: [program]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: program PK
 *        type: Integer
 *    responses:
 *      200:
 *        description: Delete program data
 */
router.delete('/:id', async function (req, res, next) {
  Program.findByIdAndRemove(req.params.id, (err, program) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(program)
  })
})

module.exports = router
