import express from "express";
const app = express();
import {spawn} from 'child_process'
import cors from 'cors'

app.use(express.json())
app.use(cors())

app.get('/data', (req, res) => {
    const pyscript = spawn('python', ['./script.py'])
    pyscript.stdout.on('data', (data) => {
        const mystr = data.toString()
        const myjson = JSON.parse(mystr)
        return res.status(200).json(myjson)
    })
})

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
