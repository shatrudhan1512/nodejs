import express from "express"

const app = express()

const PORT = process.env.PORT ?? 3000

app.get("/", (req, res) => {
    return res.json({ msg: "Server API message v2" })
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on PORT ${PORT}`)
})