const express = require('express')
const url = require('url')
const app = express()
const port = 3000


let words = ["bonfire", "cardio", "case", "character", "bonsai"]

app.get('/prefixes',async (req,res)=>{
    var result = [{
        'message' : "havn't started learning trees yet so so could'nt find the unique prefix"
    }]
    const keywords = req.query.keywords.split(',')
    keywords.forEach(element => {
        var obj
        if (words.includes(element)){
            obj = {
                "keyword": element,
                "status" : 'found'
            }
        }else {
            obj = {
                "keyword": element,
                "status": 'not_found'
            }
        }
        result.push(obj)
    });
    res.json(result)
})

app.listen(port,()=>{
    console.log('Server running successfully')
})