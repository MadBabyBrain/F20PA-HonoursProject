import { Express } from "express";
import { resolve } from "path";

var routes = (app: Express) => {

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    app.get('/', (req, res, next) => {
        res.sendFile("index.html", {root: resolve("dist/honours-project") })
    })
}


export { routes }