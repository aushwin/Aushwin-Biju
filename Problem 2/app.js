const express = require('express')
const url = require('url')
const app = express()
const port = 3000

const validUrls = ["/primes","/fibo","/odd","/rand"]


app.get('/prefixes',async (req,res)=>{
    var numbers = []
    const keywords = req.query.keywords.split(',')
    res.json({keywords:keywords})
})

app.listen(port,()=>{
    console.log('Server running successfully')
})