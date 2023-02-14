const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json()); //middleware setup

app.get('/', (req, res) => {
    res.json({
        message: 'fullstack message board!'
    });
});

const port = process.env.PORT || 1234; //this is so that if the app gets exported to a different server it isn't hardcoded to a port since a different port may get assigned.
app.listen(port, () => {
    console.log(`listening on ${port}`);
});