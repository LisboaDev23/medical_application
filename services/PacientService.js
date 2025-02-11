import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllPacients = async() => {
    return DoctorRepository.getAllDoctors();
};

const getPacient = async(id) => {
    return DoctorRepository.getDoctor(id);
};

const savePacient = async({pacientId, name, birthDate, email, phone}) => {
    return DoctorRepository.saveDoctor({pacientId, name, birthDate, email, phone});
};

const updatePacient = async(id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    return DoctorRepository.updateDoctor(id, {doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone});
};

const deletePacient = async(id) => {
    return DoctorRepository.deletePacient(id); 
};

const pacientService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}
export default pacientService;