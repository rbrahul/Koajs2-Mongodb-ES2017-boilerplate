import mongoose from 'mongoose';
const User = new mongoose.Schema({
    user_name: String,
    email: String,
    display_name: String,
    phone: String,
    address: String,
    marital_status: Boolean,
    avatar: String,
    password: String
});

export default mongoose.model('user', User);