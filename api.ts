import cors from 'cors'
import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome")
})

app.listen(5500, () => {
    console.log(`Listening on port 5500`)
})