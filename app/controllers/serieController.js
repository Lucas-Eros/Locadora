const Serie = require('../models/mongoSchemas/serieSchema');

// Controlador para listar todas as séries
exports.list = async (req, res) => {
  try {
    const séries = await Serie.find();
    res.status(200).json(séries);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as séries' });
  }
};

// Controlador para obter detalhes de uma série específica
exports.get = async (req, res) => {
  try {
    const serieId = req.params.serieId;
    const série = await Serie.findById(serieId);

    if (!série) {
      return res.status(404).json({ error: 'Série não encontrada' });
    }

    res.status(200).json(série);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter detalhes da série' });
  }
};

// Controlador para adicionar uma nova série
exports.create = async (req, res) => {
  try {
    const { título, descrição, gênero, anoLançamento } = req.body;

    const série = new Serie({ título, descrição, gênero, anoLançamento });
    await série.save();

    res.status(201).json(série);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar uma nova série' });
  }
};

// Controlador para atualizar uma série
exports.update = async (req, res) => {
  try {
    const serieId = req.params.serieId;
    const { título, descrição, gênero, anoLançamento } = req.body;

    const série = await Serie.findByIdAndUpdate(
      serieId,
      { título, descrição, gênero, anoLançamento },
      { new: true }
    );

    if (!série) {
      return res.status(404).json({ error: 'Série não encontrada' });
    }

    res.status(200).json(série);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a série' });
  }
};

// Controlador para excluir uma série
exports.delete = async (req, res) => {
  try {
    const serieId = req.params.serieId;

    const série = await Serie.findByIdAndRemove(serieId);

    if (!série) {
      return res.status(404).json({ error: 'Série não encontrada' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a série' });
  }
};