const { read } = require('fs')
const http = require ('http')

const server = http.createServer((req, res) =>{
if(req.url === '/'){
    res.end('welcome to ouur home page')
}
   if(req.url === '/about'){
    res.end(`
    <h1>Oops</h1>
    <p>we can't seem to find the page ur l8kn foor</p>
    <a href="/">back home </a>
    `)
   }

})

server.listen(5000)