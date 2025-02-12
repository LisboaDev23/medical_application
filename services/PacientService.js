import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllPacients = async() => {
    return DoctorRepository.getAllDoctors();
};

const getPacient = async(id) => {
    return DoctorRepository.getDoctor(id);
};

const savePacient = async({name, birthDate, email, phone}) => {
    return DoctorRepository.saveDoctor({name, birthDate, email, phone});
};

const updatePacient = async(id, {name, birthDate, email, phone}) => {
    return DoctorRepository.updateDoctor(id, {name, birthDate, email, phone});
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