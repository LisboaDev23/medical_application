import express from "express";
import PrerscriptionService from "../services/PrescriptionService.js";
import multer from "multer";
import process from "process";
import path from "path";

let router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, "./MedApp/prescriptions");
    }, 
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/uploadPrescription/:id', upload.single('file'), async (req,res)=>{
    try {
        const {id} = req.params;
        let prescription = await PrerscriptionService.getPrescription(id);
        const file = "./MedApp/prescriptions" + req.file.originalname;
        prescription = PrescriptionService.updatePrescription(id, {file});

        return res.status(200).send(prescription);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get('readPrescription/:id', async(req,res)=>{
    const {id} = req.params;

    try {
        const prescription = await PrescriptionService.getPrescription(id);
        let filePath = path.resolve(process.cwd() + "/../" + prescription.file);
        res.status(200).send(filePath);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/prescriptions", async(req,res)=>{
    try {
        const prescriptions = await PrerscriptionService.getAllPrescriptions();
        res.status(200).send(prescriptions);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/getPrescription/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const prescription = await PrerscriptionService.getPrescription(id);
        res.status(200).send(prescription);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.post("/postPrescription", async(req,res)=>{
    const {date, appointmentId, medicine, dosage, instructions} = req.body;
    try {
        const prescription = await PrerscriptionService.savePrescription({date, appointmentId, medicine, dosage, instructions});
        res.status(201).send(prescription);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/generatePrescription/:id", async(req,res) => {
    const {id} = req.params;
    try {
        const prescription = await PrerscriptionService.getPrescription(id);
        const generatedPrescription = await PrerscriptionService.generatePrescriptionFile(prescription);
        res.send(generatedPrescription);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.put("/prescriptions/:id", async(req,res)=>{
    const {id} = req.params;
    const {date, appointmentId, medicine, dosage, instructions, file} = req.body;
    try {
        const prescription = await PrerscriptionService.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions, file});
        res.status(200).send(prescription);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.delete("/deletePrescription/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const prescription = await PrerscriptionService.deletePrescription(id);
        res.status(200).send(prescription);
    }
    catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});


export default router;