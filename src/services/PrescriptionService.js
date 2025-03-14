import PrescriptionRepository from "../repositories/DoctorRepository.js";
import AppointmentService from "./AppointmentService.js";
import PacientService from "./PacientService.js";
import DoctorService from "./DoctorService.js";
import PDFDocument from "pdfkit";
import fs from "fs";

const getAllPrescriptions = async() => {
    return await PrescriptionRepository.getAllPrescriptions();
};

const getPrescription = async(id) => {
    return await PrescriptionRepository.getPrescription(id);
};

const savePrescription = async({date, appointmentId, medicine, dosage, instructions}) => {
    return await PrescriptionRepository.savePrescription({date, appointmentId, medicine, dosage, instructions});
};

const updatePrescription = async(id, {date, appointmentId, medicine, dosage, instructions, file}) => {
    return await PrescriptionRepository.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions, file});
};

const deletePrescription = async(id) => {
    return await PrescriptionRepository.deletePrescription(id); 
};

const generatePrescriptionFile = async(prescription) => {
    const appointment = AppointmentService.getAppointment(prescription.appointmentId);
    const pacient = PacientService.getPacient(appointment.pacientId);
    const doctor = DoctorService.getDoctor(appointment.doctorId);

    const id = prescription._id;
    const document = new PDFDocument({font: 'Courier'});
    const filePath = "./MedApp/prescriptions" + id + ".pdf";

    document.pipe(fs.createWriteStream(filePath));
    document.fontSize(16).text("Pacient name: " + pacient.name);
    document.fontSize(16).text("Doctor name: " + doctor.name);

    const recipe = "Medicine " + prescription.medicine;
    document.fontSize(12).text(recipe);
    document.fontSize(12).text("Dose: " + prescription.dosage);
    document.fontSize(12).text("Instructions: " + prescription.instructions);

    document.end();
    return prescription;
};

const prescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription,
    generatePrescriptionFile
}
export default prescriptionService;