const express = require('express')
const url = require('url')
const axios = require('axios')
const app = express()
const port = 3000

const validUrls = ["/primes","/fibo","/odd","/rand"]


app.get('/numbers',async (req,res)=>{
    var numbers = []
    const urls = req.query.url
    console.log(urls)
     for(const element of urls){
        console.log(element)
        pathName = new url.URL(element).pathname
        hostName = new url.URL(element).hostname
        if (validUrls.includes(pathName) &&hostName==='localhost'){
           try {
            let response = await axios.get(element)
            numbers.push.apply(numbers,response.data.numbers)
           }
           catch(e){
               console.log(e)
           }
       
        }
    }
    numbers = new Set(numbers)
    numbers = [...numbers]
    numbers = numbers.sort(function(a, b){return a - b})
    return res.json({numbers:numbers})
})

app.listen(port,()=>{
    console.log('Server running successfully')
})