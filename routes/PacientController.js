import express from "express";
import PacientService from "../services/PacientService.js"

let router = express.Router();

router.get("/pacients", async(req,res)=>{
    try {
        const pacients = await PacientService.getAllPacients();
        res.status(200).send(pacients);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/getPacient/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const pacient = await PacientService.getPacient(id);
        res.status(200).send(pacient);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.post("/postPacient", async(req,res)=>{
    const {name, birthDate, email, phone} = req.body;
    try {
        const pacient = await PacientService.savePacient({name, birthDate, email, phone});
        res.status(201).send(pacient);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.put("/pacients/:id", async(req,res)=>{
    const {id} = req.params;
    const {name, birthDate, email, phone} = req.body;
    try {
        const pacient = await PacientService.updatePacient(id, {name, birthDate, email, phone});
        res.status(200).send(pacient);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.delete("/deletePacient/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const pacient = await PacientService.deletePacient(id);
        res.status(200).send(pacient);
    }
    catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});


export default router;