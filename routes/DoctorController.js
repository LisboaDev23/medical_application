import express from "express";
import DoctorService from "../services/DoctorService.js"
import bcrypt from 'bcrypt';

let router = express.Router();

router.get("/doctors", async(req,res)=>{
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.status(200).send(doctors);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/getDoctor/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const doctor = await DoctorService.getDoctor(id);
        res.status(200).send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.post("/postDoctor", async(req,res)=>{
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const doctor = await DoctorService.saveDoctor({name, login, password: hashedPassword, medicalSpecialty, medicalRegistration, email, phone});
        res.status(201).send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send("Não foi possível cadastrar o médico! " + exception);
    }
});

router.put("/doctors/:id", async(req,res)=>{
    const {id} = req.params;
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const doctor = await DoctorService.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.status(200).send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.delete("/deleteDoctor/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const doctor = await DoctorService.deleteDoctor(id);
        res.status(200).send(doctor);
    }
    catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});


export default router;