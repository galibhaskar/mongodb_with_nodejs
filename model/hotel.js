import mongoose from "mongoose";
import validator from "validator";

let hotelSchema = mongoose.Schema({
  name: String,
  rating: Number,
  bedrooms: Number,
  bathrooms: Number,
  email: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

let hotelModel = mongoose.model("airbnbs", hotelSchema);

export default hotelModel;
