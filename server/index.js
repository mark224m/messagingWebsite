const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const messages = require('./db/messages');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); //middleware setup
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.get('/', (req, res) => {
    res.json({
        message: 'fullstack message board!'
    });
});

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});
app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        console.log("checking");
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error.message);
    });
});

const port = process.env.PORT || 1234; //this is so that if the app gets exported to a different server it isn't hardcoded to a port since a different port may get assigned.
app.listen(port, () => {
    console.log(`listening on ${port}`);
});