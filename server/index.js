const express = require('express');
const product = require('./api/app');

const app = express();

const port = process.env.PORT || 1234; //this is so that if the app gets exported to a different server it isn't hardcoded to a port since a different port may get assigned.

app.use("/api/product", product);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});