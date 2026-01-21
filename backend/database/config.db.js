import mysql2 from 'mysql2/promise'
import { config } from 'dotenv'

config()

export const poolConec = mysql2.createPool({

    host : process.env.HOST_DB , 
    password : '' , 
    database : 'users' , 
    user : 'root' 

})

