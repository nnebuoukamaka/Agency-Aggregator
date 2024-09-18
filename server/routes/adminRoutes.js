const express = require('express');
const { getAllAgencies, updateAgencyByAdmin, toggleAgencyStatus } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');
// const adminController = require('../controllers/adminController');
const router = express.Router();

// Admin: Get all agencies
router.get('/agencies', protect, admin, getAllAgencies);

// Admin: Update agency details
router.put('/agencies/:id', protect, admin, updateAgencyByAdmin);

// Admin: Activate or deactivate agency
router.put('/agencies/:id/toggle-status', protect, admin, toggleAgencyStatus);

// /**
//  * @swagger
//  * tags:
//  *   name: Admin
//  *   description: Admin operations for managing agencies
//  */

// /**
//  * @swagger
//  * /api/admin/agencies:
//  *   get:
//  *     summary: Get all agencies (Admin only)
//  *     tags: [Admin]
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
// router.get('/agencies', admin, adminController.getAllAgencies);

// /**
//  * @swagger
//  * /api/admin/agencies/{id}:
//  *   put:
//  *     summary: Update agency details (Admin only)
//  *     tags: [Admin]
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
// router.put('/agencies/:id', admin, adminController.updateAgencyDetails);

// /**
//  * @swagger
//  * /api/admin/agencies/{id}/status:
//  *   put:
//  *     summary: Activate or deactivate an agency (Admin only)
//  *     tags: [Admin]
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
//  *         description: Agency status updated successfully
//  */
// router.put('/agencies/:id/status', admin, adminController.toggleAgencyStatus);

module.exports = router;

