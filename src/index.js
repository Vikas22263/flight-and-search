const express =require("express")
const {PORT} =require('./config/serverconfig')

const setupandstartserver=async()=>{
    const app=express()
    app.use(express.json())
    app.listen(PORT,()=>{
        console.log('server is runing in port 3000')
    })
}

setupandstartserver();




