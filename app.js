const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if(req.url === '/about')
    {
        res.end('here is out short history')
    }
    res.end('<h1> OOPs</h1>')
})

server.listen(5000);