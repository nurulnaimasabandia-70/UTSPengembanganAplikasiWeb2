const mongoose = require('mongoose');

const ruangSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nama: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ruang', ruangSchema);