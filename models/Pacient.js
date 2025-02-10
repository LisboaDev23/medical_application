import mongoose from "mongoose";

const Schema = mongoose.Schema;

    const pacientSchema = new Schema ({
        pacientId: {
            type: String,
            required: [true,'Pacient is required!']
        },
        name: {
            type: String,
            required:[true,'Pacient name is required!']
        },
        birthDate: {
            type: Date,
            required:[true,'Birth Day pacient is required!']
        },
        email: {
            type: String,
            required:[true,'Pacient email is required!']
        },
        phone: {
            type: Number,
            required:[true,' Pacient phone number is required!']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;