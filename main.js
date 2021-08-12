const express = require('express');
const app = express();

app.set('port', 80);

app.use('/', (req, res, next) => {
    res.send('hello, world');
});

app.listen(app.get('port'));