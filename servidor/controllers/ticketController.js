const Ticket = require('../models/Ticket');

exports.crearTicket = (req, res) => {
    console.log('Estoy en crear ticket')
}

exports.obtenerTickets = async (req, res) => {
    try {

        const tickets = await Ticket.aggregate([
            {$project: {"localidad.descripcion": 1}},
            {$group: {_id: "$localidad.descripcion", total: {$sum: 1}} }]);
        res.json(tickets);

    } catch (error) {
        console.log(error);
        res.status(500).send("ERROR");
    }
}