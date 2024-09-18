const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
// const authController = require('../controllers/authController')
router.post('/register', register);
router.post('/login', login);

// /**
//  * @swagger
//  * tags:
//  *   name: Auth
//  *   description: Authentication endpoints
//  */

// /**
//  * @swagger
//  * /api/auth/login:
//  *   post:
//  *     summary: Login a user
//  *     tags: [Auth]
//  *     requestBody:
//  *       description: Login credentials
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 description: The user's email
//  *               password:
//  *                 type: string
//  *                 description: The user's password
//  *     responses:
//  *       200:
//  *         description: User logged in successfully
//  */
// router.post('/login', authController.loginUser);

// /**
//  * @swagger
//  * /api/auth/register:
//  *   post:
//  *     summary: Register a new user
//  *     tags: [Auth]
//  *     requestBody:
//  *       description: User registration data
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: User registered successfully
//  */
// router.post('/register', authController.registerUser);


module.exports = router;
