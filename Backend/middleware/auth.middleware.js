const User = require("../models/user.model");
const Captain = require("../models/captain.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });

  if (isBlackListed) {
    res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlackList = await blackListTokenModel.findOne({ token: token });

  if (isBlackList) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await Captain.findById(decoded._id);

    req.captain = captain;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
