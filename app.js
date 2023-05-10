const http = require('http')

const server = http.createServer((req, res) => {//the req is the incoming request sent by the user on which page they want to go. respose is what we are sending
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url === '/about'){
        res.end('about page')
    }
    res.end(`
    <p>this page is broken</p>
    <a href='/'>home page</a>`
    )
})

server.listen(5000)  //this is the port thst its listening to