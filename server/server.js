import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { ConnDB } from './config/db.config.js';


const app = express()
const PORT = process.env.PORT||1001;

app.use(cors())
app.use(express.json())


// routes
app.get('/',(req,res)=>{
    res.status(201).json({
        message:"Hello world"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is up on http://localhost:${PORT}`)
    ConnDB()
})