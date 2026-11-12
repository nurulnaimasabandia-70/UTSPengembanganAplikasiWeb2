const Ruang = require('../models/ruangModels');

exports.createRuang = async (req, res) => {
  try {
    const ruang = await Ruang.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Data ruang berhasil ditambahkan',
      data: ruang
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllRuang = async (req, res) => {
  try {
    const ruang = await Ruang.find();

    res.status(200).json({
      success: true,
      total: ruang.length,
      data: ruang
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};