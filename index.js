import express from "express";
//import pkg from "body-parser";
import router from "./routes/router.js";
import db from './database/database.js'

const app = express();

//const { json, urlEncoded } = pkg;

app.use(express.json());
app.use(express.urlencoded({extented: true}));

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

app.use("/", router);