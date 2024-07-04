const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      img: [{ type: String, required: true }],
      colors: [{ type: String, required: true }],
      sizes: [{ type: String, required: true }],
      price: {
        current: { type: Number, required: true },
        discount: { type: Number },
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      description: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  const Employee = mongoose.model("Employee", EmployeeSchema);
  
  module.exports = Employee;