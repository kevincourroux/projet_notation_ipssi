const mongoose = require('mongoose');
const modulesModel = require('../models/modulesModel');
const Modules = mongoose.model("Modules");

exports.get_all_modules = (req, res) => {

    let params_query = {
        sessions_id: req.params.sessions_id,
        user_id: req.params.user_id
    }
    Modules.find(params_query, (error, modules) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(modules);
        }
    })
}

exports.create_a_modules = (req, res) => {

    let data = {
        name: req.body.name,
        sessions_id: req.params.sessions_id,
        user_id: req.params.user_id,
        start_at: req.body.start_at,
        end_at: req.body.end_at
    }

    let new_modules = new Modules(data);
    new_modules.save((error, modules) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(201);
            res.json(modules);
        }
    })
}

exports.update_a_modules = (req, res) => {

    Modules.findOneAndUpdate({
        sessions_id: req.params.sessions_id,
        user_id: req.params.user_id
    }, req.body, {
        new: true
    }, (error, modules) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(modules);
        }
    })
}

exports.delete_a_modules = (req, res) => {
    Modules.remove({
        sessions_id: req.params.sessions_id,
        user_id: req.params.user_id
    }, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json({
                message: "Modules supprimé"
            });
        }
    })
}