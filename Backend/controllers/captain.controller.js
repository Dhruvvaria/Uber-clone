const Captain = require("../models/captain.model.js");
const captainService = require("../services/captain.services.js");
const { validationResult } = require("express-validator");

module.exports.regesterCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlredyExist = await Captain.findOne({ email });

  if (isCaptainAlredyExist) {
    res.status(400).json({ message: "Captain already exist" });
  }
  const hashedPassword = await Captain.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};
