const mongoose = require('mongoose');


const CommunityEventSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
        required: [ true, "Event title is required."],
        min: [3, "Event title requires 3 characters at minumum length."]
    },
    eventDate: {
        type: Date,
        required: [ true, "Event start date is required."],
    },
    eventFee: {
        type: Number,
        required: [ true, "If the event is free enter 0 otherwise enter the fee associated with event." ],
        min: [0, "Minimum fee is $0.00 for free events." ]
    },
    eventDetails: {
        type: String,
        required: [ true, "Event details are required."],
        min: [10, "Event details require at minimum 10 characters to describe the event."],
        max: [250, "Event details max length is 150 characters, please shorten details."]
    },
    eventCoordinatorName: {
        type: String,
        required: [ true, "Event coordinator's name is required."],
        min: [1, "Event coordinator's name requires 1 character at minimum. "]
        // max: [250, "Event coordinator's name cannot exceed 250 characters in length."]
    },
    eventCoordinatorPhone: {
        type: String,
        required: [ true, "Event coordinator's phone number is required in format 999-999-9999."],
        match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/]
    },
}, { timestamp: true})

module.exports.Event = mongoose.model('Event', CommunityEventSchema)