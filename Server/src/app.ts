import { Express } from "express";
import { resolve } from "path";

var routes = (app: Express) => {

    app.get('/*', (req, res, next) => {
        res.sendFile("index.html", {root: resolve("C:/home/site/repository/dist/honours-project") })
    })
}


export { routes }