const express = require('express');
const router = express.Router();

const {
  createRuang,
  getAllRuang
} = require('../controllers/ruangControllers');

router.post('/', createRuang);
router.get('/', getAllRuang);

module.exports = router;