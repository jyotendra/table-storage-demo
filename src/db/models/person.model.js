import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String
});

const personModel = mongoose.model("person", personSchema, "person");
export default personModel;
