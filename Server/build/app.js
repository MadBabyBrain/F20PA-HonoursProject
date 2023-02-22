"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const path_1 = require("path");
var routes = (app) => {
    app.get('/*', (req, res, next) => {
        res.sendFile("index.html", { root: (0, path_1.resolve)("C:/home/site/repository/dist/honours-project") });
    });
};
exports.routes = routes;
