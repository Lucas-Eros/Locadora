const Aluguel = require('../models/mongoSchemas/aluguelSchema');

exports.create = async (req, res) => {
  try {
    const { sérieId, usuárioId } = req.body;

    // Verifique se a série e o usuário existem e estão disponíveis para aluguel

    // Crie o aluguel
    const aluguel = new Aluguel({ sérieId, usuárioId });

    // Salve o aluguel no banco de dados
    await aluguel.save();

    res.status(201).json(aluguel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o aluguel' });
  }
};

exports.list = async (req, res) => {
  try {
    const aluguéis = await Aluguel.find().populate('sérieId', 'título');
    res.status(200).json(aluguéis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os aluguéis' });
  }
};

exports.devolver = async (req, res) => {
  try {
    const aluguelId = req.params.aluguelId;

    // Encontre o aluguel pelo ID
    const aluguel = await Aluguel.findById(aluguelId);

    if (!aluguel) {
      return res.status(404).json({ error: 'Aluguel não encontrado' });
    }

    aluguel.dataDevolução = new Date();
    await aluguel.save();
    res.status(200).json(aluguel);
  } 
  catch (error) {
    res.status(500).json({ error: 'Erro ao devolver o aluguel' });
  }
};
