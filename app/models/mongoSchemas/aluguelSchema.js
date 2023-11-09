const mongoose = require('mongoose');

const AluguelSchema = new mongoose.Schema({
  sérieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Serie',
    required: true,
  },
  usuárioId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  dataAluguel: {
    type: Date,
    default: Date.now,
  },
  dataDevolução: {
    type: Date,
  },
});

const Aluguel = mongoose.model('Aluguel', AluguelSchema);

module.exports = Aluguel;
