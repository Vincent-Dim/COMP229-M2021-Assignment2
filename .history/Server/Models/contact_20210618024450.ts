import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ContactSchema = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contact" // same as db collection
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;