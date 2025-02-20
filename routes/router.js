import express from "express";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";
import DoctorService from "../services/DoctorService.js";
import bcrypt from 'bcrypt';
import verifyToken from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

let router = express.Router();

router.get(
    "/", (request, response) => {
        console.log("OI!");
        response.status(200).json({message: "Olá, tu é foda! Subiu o servidor!"});
    }
);

//mapeamento do login
router.post('/login', async(req,res) => {
    try {
        const { login, password } = req.body;
        const doctor = await DoctorService.getDoctorByLogin(login);
        if (!doctor)
            return res.status(401).json({error: 'Authentication failed!'});
        
        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if(!password)
            return res.status(401).json({error: 'Authentication failed!'});
        const token = jwt.sign({doctorId: doctor._id}, 'your-secret-key', {
            expiresIn: '1h',
        });
        res.status(200).json({token});
    }
    catch (exception) {
        console.log(error);
        res.status(500).json({error: 'Login Failed!'});
    }
});

router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, pacientController);
router.use("/", verifyToken, prescriptionController);

export default router;