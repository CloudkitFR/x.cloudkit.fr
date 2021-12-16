import path     from "path";
import express  from "express";


//////////////////////////////////////
//  EXPRESS
//////////////////////////////////////


const app = express();

app.disable("x-powered-by");
app.use(express.static("public"));
app.use(express.json());


//////////////////////////////////////
//  ROUTES
//////////////////////////////////////


app.get("*", function (req, res) {
    res.sendFile(path.resolve("public", "index.html"));
});


//////////////////////////////////////
//  MAIN
//////////////////////////////////////


app.listen(8080, "0.0.0.0", function () {
    console.log("Server started.");
});
