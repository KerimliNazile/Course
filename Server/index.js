import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'
dotenv.config()
app.use(cors())
app.use(express.json())

const dataSchema = new Schema({
    image: { type: String, required: true },
    text: { type: String, required: true },
    imagetwo: { type: String, required: true },
    // author: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps:true})
const Datas = mongoose.model("Datas", dataSchema)


app.get('/datas', async (req, res) => {
    try {
        const datas = await Datas.find({})
        res.send(datas)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
app.get('/datas/:id', async (req, res) => {
    try {
        const datas = await Datas.findById(req.params.id)
        res.send(datas)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.post('/datas', async (req, res) => {
    try {
        const data = new Datas({
            image: req.body.image,
            text: req.body.text,
            imagetwo: req.body.imagetwo,
            author: req.body.author,
            price: req.body.price
        })
        await data.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.delete('/datas/:id', async (req, res) => {
    try {
        const datas = await Datas.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("db connect"))
    .catch(err => console.log("db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})