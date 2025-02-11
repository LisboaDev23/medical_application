import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
};

const getPacient = async(id) => {
    try {
        return await Pacient.findById(id);
    }
    catch (exception) {
        throw new Error(`Doctor not found where id ${id}`, exception);
    }
};

const savePacient = async ({doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        const pacient = new Pacient({doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        return await pacient.save();
    } catch (exception) {
        throw new Error("Doctor is not saved!", exception);
    }
};

const updatePacient = async (id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}, {new: true});
    } catch (exception) {
        throw new Error("Doctor not updated, review the informations and try again!", exception);
    }
};

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndUpdate(id);
    } catch (exception) {
        throw new Error("Doctor is not deleted, try again!", exception);
    }
};

const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
};

export default pacientRepository;
