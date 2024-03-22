const express = require('express');
const app = express();
const path = require('path');


// setup assets and middleware
app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
})

app.listen(5001, () => {
    console.log('listening on port 5000...');
})