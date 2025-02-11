import express from "express";
import DoctorService from "../services/DoctorService.js"

let router = express.Router();

router.get("/doctors", async(req,res)=>{
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.send(doctors);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/getDoctor/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const doctor = await DoctorService.getDoctor(id);
        res.send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.post("/postDoctor", async(req,res)=>{
    const {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.params;
    try {
        const doctor = await DoctorService.saveDoctor({doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.put("/doctors/:id", async(req,res)=>{
    const {id} = req.params;
    const {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.params;
    try {
        const doctor = await DoctorService.updateDoctor(id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.delete("/deleteDoctor/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor);
    }
    catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});


export default router;