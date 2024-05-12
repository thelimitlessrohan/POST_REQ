const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  app.get("/register",(req,res) => {
    console.log(req.query);
    res.send("Standered GET Response");
  });
  
  app.post("/register",(req,res) => {
    console.log(req.body);
    res.send("Standered POST Response");
  });