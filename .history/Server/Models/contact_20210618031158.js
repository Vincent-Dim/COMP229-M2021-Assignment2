"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    username: String,
    password: String,
    email: String,
    city: String,
    profession: String,
    age: Number
}, {
    collection: "contact"
});
const Model = mongoose_1.default.model("Contact", ContactSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map