import Prescription from "../models/Prescription.js";

const getAllPrescriptions = async () => {
    return await Prescription.find();
};

const getPrescription = async(id) => {
    try {
        return await Prescription.findById(id);
    }
    catch (exception) {
        throw new Error(`Doctor not found where id ${id}`, exception);
    }
};

const savePrescription = async ({date, appointmentId, medicine, dosage, instructions}) => {
    try {
        const prescription = new Prescription({date, appointmentId, medicine, dosage, instructions});
        return await prescription.save();
    } catch (exception) {
        throw new Error("Doctor is not saved!", exception);
    }
};

const updatePrescription = async (id, {date, appointmentId, medicine, dosage, instructions}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {date, appointmentId, medicine, dosage, instructions}, {new: true});
    } catch (exception) {
        throw new Error("Doctor not updated, review the informations and try again!", exception);
    }
};

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (exception) {
        throw new Error("Doctor is not deleted, try again!", exception);
    }
};

const prescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
};

export default prescriptionRepository;