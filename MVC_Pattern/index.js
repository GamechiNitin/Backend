const express = require('express')

const connectDB = require('./config/db');
const dotenv = require('dotenv')
const productroutes = require('./routes/routes')
const app = express()
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT;

app.use('/api', productroutes);

//connect to database
connectDB();


app.listen(PORT, () => {
    console.log('Server is up')
})