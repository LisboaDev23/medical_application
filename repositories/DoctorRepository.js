import Doctor from "../models/Doctor.js";

const getAllDoctors = async () => {
    return await Doctor.find();
};

const getDoctor = async(id) => {
    try {
        return await Doctor.findById(id);
    }
    catch (exception) {
        throw new Error(`Doctor not found where id ${id}`, exception);
    }
};

const saveDoctor = async ({doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        const doctor = new Doctor({doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        return await doctor.save();
    } catch (exception) {
        throw new Error("Doctor is not saved!", exception);
    }
};

const updateDoctor = async (id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}, {new: true});
    } catch (exception) {
        throw new Error("Doctor not updated, review the informations and try again!", exception);
    }
};

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndUpdate(id);
    } catch (exception) {
        throw new Error("Doctor is not deleted, try again!", exception);
    }
};

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorRepository;