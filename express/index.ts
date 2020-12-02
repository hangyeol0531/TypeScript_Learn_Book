import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 4000


app
    .use(bodyParser.urlencoded({extended : true}))
    .use(cors())

app.get('/', (req, res) =>{
    res.json({message : 'Hello world!!'})
})

app.get('/user/:skip/:limit', (req, res) =>{
    const {skip, limit} = req.params
    // console.log(skip)
    res.json({skip, limit})
})

app.listen(port, () =>{
    console.log(`{${port} 포트로 서버 온}`)
})