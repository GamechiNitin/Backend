
const express = require('express');
const connectDB = require('./db');
const routes = require('./routes/routes');
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT;


app.use(express.json());
//connect to database
connectDB();

app.use('/api', routes);


app.listen(PORT, () => {
    console.log("Server is Up")
})

