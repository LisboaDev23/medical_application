import express from "express";
import router from "./routes/router.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extented: true}));
app.use(cors());

app.listen(3001, () => {
    console.log("Listening to port 3001");
});

app.use("/", router);