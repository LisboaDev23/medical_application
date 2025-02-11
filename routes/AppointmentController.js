import express from "express";
import AppointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get("/appointments", async(req,res)=>{
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.get("/getAppointment/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        res.send(appointment);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.post("/postAppointment", async(req,res)=>{
    const {date, doctorId, pacientId} = req.params;
    try {
        const appointment = await AppointmentService.saveAppointment({date, doctorId, pacientId});
        res.send(appointment);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.put("/appointments/:id", async(req,res)=>{
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.params;
    try {
        const appointment = await AppointmentService.updateAppointmentAppointment(id, {date, doctorId, pacientId});
        res.send(appointment);
    } catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

router.delete("/deleteAppointment/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const appointment = await AppointmentService.deleteAppointment(id);
        res.send(appointment);
    }
    catch (exception) {
        console.log(exception);
        res.status(500).send(exception);
    }
});

export default router;