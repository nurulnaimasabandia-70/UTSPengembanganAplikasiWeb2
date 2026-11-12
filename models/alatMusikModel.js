const mongoose = require('mongoose');

const alatMusikSchema = new mongoose.Schema({
  kodeAlat: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nama: {
    type: String,
    required: true,
    trim: true
  },
  hargaSewa: {
    type: Number,
    required: true,
    min: 0
  },
  jenis: {
    type: String,
    required: true,
    trim: true
  },
  identitas: {
    merek: {
      type: String,
      required: true,
      trim: true
    },
    tahunBeli: {
      type: String,
      required: true,
      trim: true
    }
  },
  ruangId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ruang',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('AlatMusik', alatMusikSchema);