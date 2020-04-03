import mongoose, { Schema } from "mongoose";

export const PROVIDED_ENEM = ["FACEBOOK", "GOOGLE"];

const CustomerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true
    },
    avtarUrl: String,
    provider: [
      {
        uid: { required: true, type: String },
        type: { required: true, type: String, enum: PROVIDED_ENEM }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("customer", CustomerSchema);
