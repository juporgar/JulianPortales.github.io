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