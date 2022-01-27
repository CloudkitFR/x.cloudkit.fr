import path         from "path";
import express      from "express";
import expressWs    from "express-ws";
import pty          from "node-pty";


//////////////////////////////////////
//  EXPRESS
//////////////////////////////////////


const app = express();
const wss = expressWs(app);

app.disable("x-powered-by");
app.use(express.static("public"));
app.use(express.json());


//////////////////////////////////////
//  ROUTES
//////////////////////////////////////


app.ws("/", function (ws, req) {
    let proc = pty.spawn("/bin/bash", [], {
        name    : 'xterm-color',
        cols    : 80,
        rows    : 30,
        cwd     : process.env.HOME,
        env     : process.env
    });

    proc.onData(function (data) {
        ws.send(data);
    });

    proc.onExit(function () {
        ws.close();
    });

    ws.on("message", function (message) {
        if (message[0] == "\u0000" && message.length > 3) {
            let { cols, rows } = JSON.parse(message.substring(1));

            proc.resize(cols, rows);

        } else {
            proc.write(message);
        }
    });

    ws.on("close", function () {
        proc.kill();
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve("public", "index.html"));
});


//////////////////////////////////////
//  MAIN
//////////////////////////////////////


app.listen(8080, "0.0.0.0", function () {
    console.log("Server started.");
});
