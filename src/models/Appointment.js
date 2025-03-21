import mongoose from "mongoose";
import Doctor from "./Doctor.js";
import Pacient from "./Pacient.js";

const Schema = mongoose.Schema;

    const appointmentSchema = new Schema ({
        date: {
            type: Date
        },
        doctorId: {
            type: String,
            required: [true,'DoctorId is required!'],
            validate: {
                validator: (v) => {
                    const id = new mongoose.Types.ObjectId(v);
                    return Doctor.exists({_id: id});
                },
                message: props => `DoctorId: ${props.value} not found!`
            }
        },
        pacientId: {
            type: String,
            required: [true,'Pacient is required!'],
            validate: {
                validator: (v) => {
                    const id = new mongoose.Types.ObjectId(v);
                    return Pacient.exists({_id: id});
                },
                message: props => `PacientId: ${props.value} not found!`
            }
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const appointment = mongoose.model("Appointment", appointmentSchema);

export default appointment;