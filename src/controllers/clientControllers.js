const clientSchema = require("../models/clientSchema");
const bcrypt = require("bcrypt");

const clients = require("../models/clientSchema");

const getAll = (req, res) => {
    clientSchema.find(function (err, clients) {
        if(err) {
            res.status(500).send({ message: err.message })
        }
            res.status(200).send(clients)
    })
   
};

// Objetivo: cadastrar cliente
const registerClient = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    try {
        const newClient = new clientSchema(req.body);

        const savedClient = await newClient.save();

        res.status(200).json({
            message: "Cliente cadastrado com sucesso!",
            savedClient
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    registerClient
}