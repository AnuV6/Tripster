const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    routeId: {
        type: String,
        required: true
    },
    busId: {
        type: String,
        required: true
    },
    departure: {
        type: Date,
        required: true
    },
    arrival: {
        type: Date,
        required: true
    },
    latency: {
        type: Date,
        default: 0,
    }
}, { timestamps: true });

const Schedule = mongoose.model("Schedule", scheduleSchema, "schedules");
module.exports = Schedule;