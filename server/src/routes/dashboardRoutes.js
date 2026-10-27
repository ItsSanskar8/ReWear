const express = require('express');
const {
  getDashboardStats,
  getDashboardActivity,
} = require('../controllers/dashboardController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Strict security: Both authenticated AND administrator privileges required
router.use(protect);
router.use(adminOnly);

router.get('/stats', getDashboardStats);
router.get('/activity', getDashboardActivity);

module.exports = router;
