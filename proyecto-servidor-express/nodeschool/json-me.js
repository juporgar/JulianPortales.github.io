let fs = require ('fs');
let express = require ('express');
let app = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err, content){
        if(err){
            res.err(500);
        }else{
            var books = JSON.parse(content.toString());
            res.json(books);
        }
    })
});

app.listen(process.argv[2]);

//process.argv[], para que mire los parametros y coga el que se indica por el numero
//app.get('/', es para levantar un servidor que se indica.
//app.liste para dejar escuchando en el puerto que se indica con process.argv[]
//varible.readFile() para leer donde esta el archivo que se indica
//JSON.parse para parsearlo el archivo