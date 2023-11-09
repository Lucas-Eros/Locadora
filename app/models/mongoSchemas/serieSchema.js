const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
  título: {
    type: String,
    required: true,
  },
  descrição: {
    type: String,
  },
  gênero: {
    type: String,
  },
  anoLançamento: {
    type: Number,
  },
  disponível: {
    type: Boolean,
    default: true,
  },
});

const Serie = mongoose.model('Serie', SerieSchema);

module.exports = Serie;
