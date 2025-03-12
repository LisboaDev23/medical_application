import express from "express";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extented: true}));

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

app.use("/", router);