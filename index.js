import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express()

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});


const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/public/'));

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is started on port " + process.env.PORT);
});