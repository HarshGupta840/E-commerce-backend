import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        expires: "5m",
        default: Date.now
    }
}, { timestamps: true })

export default mongoose.model("Tempuser", UserSchema)