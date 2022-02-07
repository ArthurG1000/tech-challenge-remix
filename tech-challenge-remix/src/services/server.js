const connection = require ("./db-config");
const express = require('express');
const cors = require("cors");
const app = express()

const port = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
 } else {
   console.log(
     
   )
 }
})

app.get('/api/get', (req, res) => {
  connection.query("SELECT * FROM contact", (err, results) => 
  { 
    if (err) {
      console.log(err);
    }
    res.status(200).json(results);
  })
})

app.get("/api/getfamily", async (req, res) => {
  connection.query("SELECT * FROM royal_family", (err, results) => 
  { 
    if (err) {
      console.log(err);
    }
    res.status(200).json(results);
  })
});


app.get("/api/getassets", async (req, res) => {
  connection.query("SELECT * FROM royal_assets", (err, results) => 
  { 
    if (err) {
      console.log(err);
    }
    res.status(200).json(results);
  })
});

app.post("/api/postmessage", async (req, res) => {
  const { name, email, message } = req.body;
  connection.query(`INSERT INTO contact (name, email, message) VALUES ("${name}", "${email}", "${message}");`, (err, results) => 
  {
  if (err) { 
    console.log(err);
  }
  res.status(200).json(results);
})
});

app.get("/api/postmessage", async (req,res) => {
  connection.query("SELECT * FROM contact", (err, results) => 
  { 
    if (err) {
      console.log(err);
    }
    res.status(200).json(results);
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

