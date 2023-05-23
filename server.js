const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/module:moduleNumber', (req, res) => {
    let moduleNumber = req.params.moduleNumber;
    res.sendFile(path.join(__dirname, `module${moduleNumber}/index.html`));
});
app.get('/module:moduleNumber/exercises', (req, res) => {
    let moduleNumber = req.params.moduleNumber;
    res.sendFile(path.join(__dirname, `module${moduleNumber}/exercises.js`));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});