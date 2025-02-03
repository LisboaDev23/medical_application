import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router";

const app = express();

const { json, urlEncoded } = pkg;

app.use(json());
app.use(urlEncoded({extented: true}));

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

app.use("/", router);