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

const saveDoctor = async ({name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        const doctor = new Doctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        return await doctor.save();
    } catch (exception) {
        throw new Error("Doctor is not saved!", exception);
    }
};

const updateDoctor = async (id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone}, {new: true});
    } catch (exception) {
        throw new Error("Doctor not updated, review the informations and try again!", exception);
    }
};

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (exception) {
        throw new Error("Doctor is not deleted, try again!", exception);
    }
};

//login
const getDoctorByLogin = async (login) => {
    try {
        return await Doctor.findOne({"login": login});
    } catch (exception) {
        throw new Error("Doctor not found!", exception);
    }
};

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
};

export default doctorRepository;