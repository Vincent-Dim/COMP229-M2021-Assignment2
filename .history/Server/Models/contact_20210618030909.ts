import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ContactSchema = new Schema
({
    username: String,
    password: String,
    email: String,
    city: String,
    profession: String,
    age: Number
},
{
    collection: "contact" // same as db collection
});

const Model = mongoose.model("Contact", ContactSchema); //create model for contact
export default Model;