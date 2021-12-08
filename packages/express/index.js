var express = require('express');
var app = express();

require('express-ws')(app);
var pty = require('node-pty');

app.use(express.static("public"))

app.ws('/', function(ws, req) {
  let proc = pty.spawn("sh", [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
  
  proc.on("data", function (data) {
    ws.send(data)
  });

  // console.log(process)
  ws.on('message', function(msg) {
    proc.write(msg)  
  });
});

app.listen(8081);
