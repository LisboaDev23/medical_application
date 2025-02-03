import { express } from "express";

let router = express.Router();

router.get(
    "/", (request, response) => {
        console.log("OI!");
        response.status(200).json({message: "Olá, tu é foda! Subiu o servidor!"});
    }
);

export default router;