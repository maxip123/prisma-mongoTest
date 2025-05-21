import express from "express"
import Animal from "./src/routes/Animal.routes.js"

const app = express()

app.use(express.json)

app.use("/api", Animal)

app.listen(3000)
console.log("server on port", 3000)