const AlatMusik = require('../models/alatMusikModel');

exports.createAlatMusik = async (req, res) => {
  try {
    const alat = await AlatMusik.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Data alat musik berhasil ditambahkan',
      data: alat
    });
    } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Kode alat musik sudah digunakan',
        detail: error.message
      });
    }

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
exports.getAllAlatMusik = async (req, res) => {
  try {
    const filter = {};

    if (req.query.jenis) {
      filter.jenis = req.query.jenis;
    }

    const fields = req.query.fields;

    let query = AlatMusik.find(filter)
      .populate('ruangId');

    if (req.query.sort) {
  const sortField = req.query.sort.startsWith('-')
    ? req.query.sort.substring(1)
    : req.query.sort;

  const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;

  query = query.sort({ [sortField]: sortOrder });
}

    if (fields) {
      query = query.select(fields.split(',').join(' '));
    }

    const alat = await query;

    res.status(200).json({
      success: true,
      total: alat.length,
      data: alat
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getDetailAlatMusik = async (req, res) => {
  try {
    const alat = await AlatMusik.findById(req.params.id)
      .populate('ruangId');

    if (!alat) {
      return res.status(404).json({
        success: false,
        message: 'Data alat musik tidak ditemukan'
      });
    }

    res.status(200).json({
      success: true,
      data: alat
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};