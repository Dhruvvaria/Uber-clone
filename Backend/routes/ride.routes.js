const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("INvalid Pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("INvalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "motorcycle"])
    .withMessage("Invalid Vehicle Type"),

  rideController.createRide
);

router.get(
  "/get-fare",
  authMiddleware.authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("INvalid Pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("INvalid destination address"),
  rideController.getFare
);

router.post(
  "/confirm",
  authMiddleware.authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride Id"),
  rideController.confirmRide
);

router.get(
  "/start-ride",
  authMiddleware.authCaptain,
  query("rideId").isMongoId().withMessage("Invalid ride Id"),
  query("otp")
    .isString()
    .isLength({ min: 4, max: 4 })
    .withMessage("Invalid Otp"),
  rideController.startRide
);

router.post(
  "/end-ride",
  authMiddleware.authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride Id"),
  rideController.endRide
);

module.exports = router;
