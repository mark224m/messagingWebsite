const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const messages = require('../db/messages');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); //middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        message: 'fullstack message board!'
    });
});

//this code is for handling all messages on global board
export default (req, res) => {
    if (req.method === 'GET') {
        if (req.query.dynamicParam) {
            const dynamicParam = req.query.dynamicParam; // Access dynamic param from query

            messages.getAllDynamic(dynamicParam)
                .then((messages) => {
                    res.status(200).json(messages);
                })
                .catch((error) => {
                    res.status(500).json(error.message);
                });
        } else {
            console.log('Working GET request');
            messages.getAll()
                .then((messages) => {
                    res.status(200).json(messages);
                })
                .catch((error) => {
                    res.status(500).json(error.message);
                });
        }
    }
    else if (req.method === 'POST') {
        if (req.query.dynamicParam) {
            const dynamicParam = req.params.dynamicParam;

            console.log(req.body);
            messages.dynamicCreate(req.body, dynamicParam).then((message) => {
                console.log("checking");
                res.json(message);
            }).catch((error) => {
                res.status(500);
                res.json(error.message);
            });
        } else {
            console.log(req.body);
            messages.create(req.body).then((message) => {
                console.log("checking");
                res.json(message);
            }).catch((error) => {
                res.status(500);
                res.json(error.message);
            });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
};

const port = process.env.PORT || 1234; //this is so that if the app gets exported to a different server it isn't hardcoded to a port since a different port may get assigned.
app.listen(port, () => {
    console.log(`listening on ${port}`);
});