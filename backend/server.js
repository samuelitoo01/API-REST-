import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config()
const app = express()
app.use(cors());
app.use(express.json())

let port = process.env.PORT || 5000

app.listen(port , () => {
    console.log(`Servidor corriendo en el puerto : http://localhost:${port}`)
})

export default app 