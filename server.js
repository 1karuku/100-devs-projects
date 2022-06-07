const express = require('express')//state you will use express
const app = express()//use 'app' in place of 'express()' whenever we are using express
const PORT = 8000 // declaire your 'PORT'
const cors = require('cors')
app.use(cors())
const tea ={
    'oolong':{// object
        'type': 'black',// property : value 
        'origin':'mamaHouse',
        'waterTemp': 200,
        'caffineLevel': 100,
        'origin': 'asia',
        'flavor':'sweet'
    },
    'green tea':{// object
        'type': 'green',// property : value 
        'origin':'mamaHouse',
        'waterTemp': 200,
        'caffineLevel': 100,
        'origin': 'asia',
        'flavor':'sweet'
    },
    'unknown':{// object
        'type': 'unknown',// property : value 
        'origin':'unknown',
        'waterTemp': 'unknown',
        'caffineLevel': 'unknown',
        'origin': 'unknown',
        'flavor':'unknown'
    }
}            //queryparameter '/:name' 
app.get('/api/:name',(request, response)=>{
    const teaName=request.params.name.toLowerCase()
    if (tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    

})//query paramaeter help choose all the options inside the '/api' which are objects.
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})// a listening event 'get' listens for requests and then in response 'sendFile' returns index.html  as the response.THIS is the express scripting simple event.
// // above is a request from the client however the server hasn't been set up to listen to client request.// //

app.listen(process.env.PORT||8000, ()=>{
    console.log(`The server is listening on port ${PORT} go catch it!`)
})