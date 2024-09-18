const express = require('express');
const { createAgency, updateAgency } = require('../controllers/agencyController');
const { protect, agency } = require('../middlewares/authMiddleware'); 
// const agencyController = require('../controllers/agencyController');
const router = express.Router();

// Create a new agency (Only authenticated users)
router.post('/createAgency', protect, createAgency);

// Update an agency (Only agency or admin users)
router.put('/updateAgency:id', protect, agency, updateAgency);

// /**
//  * @swagger
//  * tags:
//  *   name: Agencies
//  *   description: API for managing agencies
//  */

// /**
//  * @swagger
//  * /api/agencies:
//  *   get:
//  *     summary: Get all agencies
//  *     tags: [Agencies]
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       200:
//  *         description: A list of agencies
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Agency'
//  */
// router.get('/', protect, agencyController.getAllAgencies);

// /**
//  * @swagger
//  * /api/agencies/{id}:
//  *   get:
//  *     summary: Get agency by ID
//  *     tags: [Agencies]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: The agency ID
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: The agency details
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Agency'
//  *       404:
//  *         description: Agency not found
//  */
// router.get('/:id', protect, agencyController.getAgencyById);

// /**
//  * @swagger
//  * /api/agencies/{id}:
//  *   put:
//  *     summary: Update agency
//  *     tags: [Agencies]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: The agency ID
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       description: Updated agency data
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Agency'
//  *     responses:
//  *       200:
//  *         description: Agency updated successfully
//  */
// router.put('/:id', protect, agencyController.updateAgency);

// /**
//  * @swagger
//  * /api/agencies:
//  *   post:
//  *     summary: Create a new agency
//  *     tags: [Agencies]
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       description: Agency object to create
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Agency'
//  *     responses:
//  *       201:
//  *         description: Agency created successfully
//  */
// router.post('/', protect, agencyController.createAgency);


module.exports = router;


