const express = require('express');
const router = express.Router();

const {
  createAlatMusik,
  getAllAlatMusik,
  getDetailAlatMusik
} = require('../controllers/alatMusikControllers');

router.post('/', createAlatMusik);
router.get('/', getAllAlatMusik);
router.get('/:id', getDetailAlatMusik);

module.exports = router;