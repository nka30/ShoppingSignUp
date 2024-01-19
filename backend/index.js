const express=require('express')
const app=express()
const db =require('./models')
const userRoutes=require('./routes/Users')
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.use("/signup",userRoutes)
db.sequelize.sync().then(()=>{
    app.listen(5000,()=>{
    console.log('server is running on port 5000')
})
})
