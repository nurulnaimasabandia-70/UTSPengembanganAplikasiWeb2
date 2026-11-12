require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');

const {
  notFoundHandler,
  errorHandler
} = require('./middlewares/errorHandler');

const ruangRoutes = require('./routes/ruangRoutes');
const alatMusikRoutes = require('./routes/alatMusikRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Sekolah Musik Berjalan!');
});

app.use('/ruang', ruangRoutes);
app.use('/alat-musik', alatMusikRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('Terhubung ke MongoDB');

    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Gagal terhubung:', err.message);
    process.exit(1);
  });