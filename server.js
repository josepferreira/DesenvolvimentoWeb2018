var http = require('http')
var fs = require('fs')
var url = require('url')

var ligacaoIndice = 


http.createServer( (req, res) => {
        

        var myObj = url.parse(req.url,true)
        var caminho = myObj.pathname
       
        if( (caminho == '/') || (caminho == '/index') || (caminho == '/index.html') ){
            
            fs.readFile('website/index.html',(erro,dados)=>{

                if (!erro){
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write(dados)
                    res.end()
                }

                else{
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.write('<html>\n')
                    res.write('<head>\n')
                    res.write('<meta charset="utf-8"/>\n')
                    res.write('</head>\n')
                    res.write('<body>\n')
                    res.write('<h1 style="font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif; font-style: oblique; text-align: center;font-size:60">ERRO 404</h1>\n')
                    res.write('<h3 style="font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif; font-style: oblique; text-align: center;">' + erro + '</h3>\n')
                    res.write('<h4 style="font-family: Arial, Helvetica, sans-serif; text-align: center;"><a href="http://localhost:4444/index.html">(Voltar ao índice)</a></h4>\n')
                    res.write('</body>\n')
                    res.write('</html>')
                    res.end()
                } 
                    
            }) 
        }    
         
        
        else {
            var caminho = caminho.split("/");
            var doc = caminho[2];
            var uurl = 'website/html/' + doc 
            fs.readFile(uurl,(erro,dados)=>{
    
                if (!erro){
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write(dados)
                    res.end()
                }

                else{
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.write('<html>\n')
                    res.write('<head>\n')
                    res.write('<meta charset="utf-8"/>\n')
                    res.write('</head>\n')
                    res.write('<body>\n')
                    res.write('<h1 style="font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif; font-style: oblique; text-align: center;font-size:60">ERRO 404</h1>\n')
                    res.write('<h3 style="font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif; font-style: oblique; text-align: center;">' + erro + '</h3>\n')
                    res.write('<h4 style="font-family: Arial, Helvetica, sans-serif; text-align: center;"><a href="http://localhost:4444/index.html">(Voltar ao índice)</a></h4>\n')
                    res.write('</body>\n')
                    res.write('</html>')
                    res.end()
                } 
            })  
        }
}).listen(4444, ()=>{
        console.log('Servidor à escuta na porta 4444...')
})


