import mongoose from "mongoose";

const Schema = mongoose.Schema;

    const pacientSchema = new Schema ({
        pacientId: {
            type: String,
            required: [true,'Pacient is required!']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;