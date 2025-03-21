import express from "express";
import router from "./routes/router.js";
import cors from "cors";
import pkg from "body-parser"

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({extented: true}));
app.use(cors());

app.listen(3001, () => {
    console.log("Listening to port 3001");
});

app.use("/", router);