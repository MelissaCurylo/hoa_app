// 1. Import Dependencies
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

// 2. Configure Mongoose
require("./configs/mongoose.config")

// 3. Configure Express
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Attach Routes to Express Server
require('./routes/event.routes')(app)


// 5. Run Express Server 
app.listen(8000, () => console.log('Listening on port: 8000')); 