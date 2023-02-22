import { Express } from "express";
import { resolve } from "path";

var routes = (app: Express) => {

    app.get('/:id', (req, res, next) => {
        res.sendFile("req.params['id']", {root: resolve("C:/home/site/wwwroot/dist/honours-project") })
    })
}


export { routes }