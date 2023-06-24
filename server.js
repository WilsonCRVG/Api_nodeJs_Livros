import app from './src/app.js'

const port = process.env.DB_PORT;

app.listen(port,()=>{
    console.log(`SERVIDOR RODANDO PORTA : ${port}`)
})