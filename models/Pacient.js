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
            required:[true,' Pacient phone number is required!'],
            validate: {
                validator: (v) => {
                    return /\d{2} 9\d{4}-\d{4}/.test(v);
                },
                message: props => `${props.value} this is not a valid phone value. Please use the following format 99 91234-1234`
            }
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;