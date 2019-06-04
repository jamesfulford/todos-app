const express = require("express");
const router = express.Router();

const {
    Todo,
} = require('../models');

function respondWithError(res) {
    return function (err) {
        console.error(err);
        res.send(err);
    }
}

router.get("/", (req, res) => {
    Todo.find()
        .then(res.json.bind(res))
        .catch(respondWithError(res));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(res.status(201).json.bind(res))
        .catch(respondWithError(res));
});

module.exports = {
    default: router,
};
