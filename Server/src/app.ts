import { Express } from "express";
import { resolve } from "path";

var routes = (app: Express) => {

    app.get('/*', (req, res, next) => {
        console.log(__dirname);
        res.sendFile("index.html")
    })
}


export { routes }