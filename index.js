const express = require('express');
const app = express()
const mongoose = require('mongoose');
const trails = require('./routes/trails');

const url = "mongodb+srv://Goldy:goldy@trailsapi.uvuicct.mongodb.net/?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.use(express.json())
app.use('/trails', trails);


app.listen(3000, () => console.log('App is running on port 3000'));