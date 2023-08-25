import mongoose from "mongoose";
import validator from "validator";

let hotelSchema = mongoose.Schema({
  name: String,
  rating: Number,
  bedrooms: Number,
  bathrooms: Number,
  createdAt: Date,
  updatedAt: Date,
  email: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

hotelSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  if (!this.createdAt) {
    this.createdAt = this.updatedAt;
  }

  next();
});

let hotelModel = mongoose.model("airbnbs", hotelSchema);

export default hotelModel;
