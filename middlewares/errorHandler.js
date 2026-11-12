const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route tidak ditemukan'
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message || 'Terjadi kesalahan pada server'
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};