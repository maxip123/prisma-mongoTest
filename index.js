import express from "express"
import IndexRouter from "./src/routes/index.js"

const app = express()

//app.use(express.json)
app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies

app.use("/api", IndexRouter) // Mount the index router at the /api path


app.listen(3000)
console.log("server on port", 3000)