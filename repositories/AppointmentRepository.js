import Appointment from "../models/Appointment.js";

const getAllAppointments = async () => {
    return await Appointment.find();
};

const getAppointment = async(id) => {
    try {
        return await Appointment.findById(id);
    }
    catch (exception) {
        throw new Error(`Appointment not found where id ${id}`, exception);
    }
};

const saveAppointment = async ({date, doctorId, pacientId}) => {
    try {
        const appointment = new Appointment({date, doctorId, pacientId});
        return await appointment.save();
    } catch (exception) {
        throw new Error("Appointment is not saved!", exception);
    }
};

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    try {
        return await Appointment.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (exception) {
        throw new Error("Appointment not updated, review the informations and try again!", exception);
    }
};

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndUpdate(id);
    } catch (exception) {
        throw new Error("Appointment is not deleted, try again!", exception);
    }
};

const appointmentRepository = {
    getAllAppointments,
    deleteAppointment,
    getAppointment,
    updateAppointment,
    saveAppointment
};

export default appointmentRepository;