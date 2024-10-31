//import json server
const jsonServer = require('json-server')
//create server for Eventify
const eventifyServer = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set route for json file
const route= jsonServer.router('db.json')
//set the PORT
const PORT = 3000 || process.env.PORT
//use the middleware,route and 
eventifyServer.use(middleware)
eventifyServer.use(route)

//listen port

eventifyServer.listen(PORT,()=>{
    console.log(`Eventify server started succesfully at port ${PORT}`)
})