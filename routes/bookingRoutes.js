const express = require("express");
const { createBooking, getUserBookings, cancelBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/book", authMiddleware, createBooking);
router.get("/my-bookings", authMiddleware, getUserBookings);
router.delete("/cancel/:bookingId", authMiddleware, cancelBooking);

module.exports = router;
