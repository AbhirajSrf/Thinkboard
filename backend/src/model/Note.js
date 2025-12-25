import mongoose from "mongoose";

// 1st create a schema
// 2nd creatre a model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt inbuild
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
