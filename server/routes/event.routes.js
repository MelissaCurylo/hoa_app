const EventController = require("./../controllers/event.controller")


module.exports = (app) => {
    // app.get("/api/test", EventController.test)
    app.get("/api/events", EventController.allEvents)
    app.get("/api/event/:id", EventController.oneEvent)
    app.post("/api/event", EventController.createEvent)
    app.put("/api/event/:id", EventController.updateEvent)
    app.delete("/api/event/:id", EventController.deleteEvent)
}