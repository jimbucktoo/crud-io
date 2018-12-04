const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3001
const queries = require('./queries')

app.use(bodyParser.json())

//FAVICON ROUTE
app.get('/favicon.ico', (req, res) => res.sendStatus(204))

//INDEX ROUTE
app.get("/", function(req, res) {
    queries.getAll().then(response => res.send(response))
})

//SHOW ROUTE
app.get("/:id", function(req, res) {
})

//POST ROUTE
app.post('/', (req, res) => {
})

//UPDATE ROUTE
app.put('/:id', (request, response) => {
})

//DELETE ROUTE
app.delete('/:id', (req, res) => {
})

//ERROR ROUTE

app.get("*", function(req, res) {
    res.send("Page Not Found: 707")
})

//HOSTING

app.listen(port, function() {
    console.log("Serving on port 3001.")
})

console.log("exit code 0")
