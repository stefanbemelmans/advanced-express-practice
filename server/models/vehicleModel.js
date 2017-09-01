import mongoose from "mongoose";

const schema = new mongoose.Schema({
  model: {
    required: true,
    type: String
  },
  year: {
    required: true,
    type: String
  },
  make: {
    required: true,
    type: String
  },
});

export default mongoose.model("Vehicle", schema);
