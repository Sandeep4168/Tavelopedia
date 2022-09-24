import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.js"
import tourRouter from "./routes/tour.js"


const PORT = 5000

const app = express()

const MONGODB_URL = "mongodb+srv://Sandeep:Sandeep4168@cluster0.7yovx8o.mongodb.net/?retryWrites=true&w=majority"

app.use(morgan("dev"))
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/users',userRouter)
app.use('/tour',tourRouter)

app.get("/",(req,res) =>  {
    res.send("Hello express !!")
})





mongoose.connect(MONGODB_URL).then(() => {
    app.listen(PORT,() => {
        console.log(`Server running on port ${PORT}`)
    })

}).catch((error) => {
    console.log(`${error} did not connect`) 

})