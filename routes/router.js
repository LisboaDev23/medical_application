import express from "express";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";

let router = express.Router();

router.get(
    "/", (request, response) => {
        console.log("OI!");
        response.status(200).json({message: "Olá, tu é foda! Subiu o servidor!"});
    }
);

router.use("/appointment", appointmentController);
router.use("/doctor", doctorController);
router.use("/pacient", pacientController);
router.use("/prescription", prescriptionController);

export default router;