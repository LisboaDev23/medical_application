import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
};

const getPacient = async(id) => {
    try {
        return await Pacient.findById(id);
    }
    catch (exception) {
        throw new Error(`Pacient not found where id ${id}`, exception);
    }
};

const savePacient = async ({name, birthDate, email, phone}) => {
    try {
        const pacient = new Pacient({name, birthDate, email, phone});
        return await pacient.save();
    } catch (exception) {
        throw new Error("Pacient is not saved!", exception);
    }
};

const updatePacient = async (id, {name, birthDate, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {name, birthDate, email, phone}, {new: true});
    } catch (exception) {
        throw new Error("Pacient not updated, review the informations and try again!", exception);
    }
};

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (exception) {
        throw new Error("Pacient is not deleted, try again!", exception);
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
