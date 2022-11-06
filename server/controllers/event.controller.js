const { Event } = require("./../models/event.model")

module.exports.test = (req, res) => {

}



// get all
module.exports.allEvents = (req, res) => {
    Event.find() 
        .then(events => res.json(events))
        .catch(err => res.status(400).json)

} 

// get one
module.exports.oneEvent = (req, res) => {
    Event.findOne({_id: req.params.id})
        .then(event => res.json(event))
        .catch(err => res.status(400).json)
}

// create
module.exports.createEvent = (req, res) => {
    Event.create(req.body)
        .then(newEvent => res.json(newEvent))
        .catch(err => res.status(400).json)
    

}
// update
module.exports.updateEvent = (req, res) => {
    Event.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
        .then(updateEvent => res.json(updateEvent))
        .catch(err => res.status(400).json)
}

// delete
module.exports.deleteEvent = (req, res) => {
    Event.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json)
}