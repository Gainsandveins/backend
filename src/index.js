import dotenv from 'dotenv'
import DB_CONNECTION from './db/index.js'

dotenv.config({
    path: './env'
})

DB_CONNECTION()


/*import { DB_NAME } from "./constants";

import { express } from "express";
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log('ERROR:', error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on Port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error('ERROR:', error)
        throw error
    }
})()*/