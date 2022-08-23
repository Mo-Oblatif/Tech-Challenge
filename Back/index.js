const db = require('./db-config.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8000;

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected as id ' + db.threadId);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/api/get", (req, res) => {

  const sqlSelect= `SELECT * FROM argonaute `;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
});

app.post("/api/insert", (req, res) => {
  const argonauteName = req.body.argonauteName;

  const sqlInsert = `INSERT INTO argonaute (argonauteName) VALUES (?)`;
  db.query(sqlInsert, [argonauteName], (err, result) => {
    console.log(result);
  })
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;