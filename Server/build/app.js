"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var routes = (app) => {
    app.get('/*', (req, res, next) => {
        console.log(__dirname);
        res.sendFile("index.html");
    });
};
exports.routes = routes;
