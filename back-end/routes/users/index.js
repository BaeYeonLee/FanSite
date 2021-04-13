const express = require('express')
const router = express.Router()

const Users = require('../../models/user.js')

/**
 *  @swagger
 *  tags:
 *    name: users
 *    description: API to manage User.
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get user data list.
 *    tags: [users]
 *    responses:
 *      200:
 *        description: Get user data list
 */
router.get('/', function (req, res, next) {
  Users.find(req.query, function (err, users) {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(users)
  })
})

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Get user data.
 *    tags: [users]
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
router.get('/:id', function (req, res, next) {
  Users.findById(req.params.id, (err, users) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }
    res.status(200).json(users)
  })
})

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Insert user data.
 *    tags: [users]
 *    parameters:
 *      - in: body
 *        name: user
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *          properties:
 *            user_id:
 *              type: string
 *            password:
 *              type: string
 *            name:
 *              type: string
 *            phone:
 *              type: string
 *            address:
 *              type: string
 *            freind:
 *              type: array
 *              items:
 *                type: string
 *    responses:
 *      200:
 *        description: Insert user data
 */
router.post('/', function (req, res, next) {
  let user = new Users({ ...req.body })

  user.save((err, users) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(users)
  })
})

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Update user data.
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: user PK
 *        type: Integer
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          properties:
 *            user_id:
 *              type: string
 *            password:
 *              type: string
 *            name:
 *              type: string
 *            phone:
 *              type: string
 *            address:
 *              type: string
 *            freind:
 *              type: array
 *              items:
 *                type: string
 *    responses:
 *      200:
 *        description: Update user data
 */
router.put('/:id', function (req, res, next) {
  let upadetData = { ...req.body }

  Users.findByIdAndUpdate(
    req.params.id,
    upadetData,
    { new: true },
    (err, users) => {
      if (err) {
        return res.status(500).send({ error: 'database failure', msg: err })
      }

      res.status(200).json(users)
    },
  )
})

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Delete user data.
 *    tags: [users]
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
  Users.findByIdAndRemove(req.params.id, (err, users) => {
    if (err) {
      return res.status(500).send({ error: 'database failure', msg: err })
    }

    res.status(200).json(users)
  })
})

module.exports = router
