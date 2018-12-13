const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
var SDK = require('blocksdk');
var sdk = new SDK();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log(sdk);
})

app.listen(port, () => { console.log(`App listening on port ${port}`) });
