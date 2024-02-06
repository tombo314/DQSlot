let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res)=>{
    if (req.url=="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(fs.readFileSync("top/top.html"));
    } else if (req.url=="/top/stylesheet/top.css"){
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(fs.readFileSync("top/stylesheet/top.css"));
    } else if (req.url=="/top/top.js"){
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.end(fs.readFileSync("top/top.js"));
    }
    else if (req.url=="/battle"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(fs.readFileSync("battle/battle.html"));
    } else if (req.url=="/battle/stylesheet/battle.css"){
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(fs.readFileSync("battle/stylesheet/battle.css"));
    } else if (req.url=="/battle/battle.js"){
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.end(fs.readFileSync("battle/battle.js"));
    }
    else if (req.url=="/favicon.ico"){
        res.end();
    }
});
server.listen(process.env.PORT || 8000);