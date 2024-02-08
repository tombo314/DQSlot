let express = require("express");
let server = express();
server.use(express.static("public"));
server.listen(process.env.PORT || 8000);