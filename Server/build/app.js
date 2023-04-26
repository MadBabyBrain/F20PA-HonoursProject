"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const path_1 = require("path");
var routes = (app) => {
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
    app.get('/get-probabilities', (req, res, next) => {
        res.sendFile("words.json", { root: (0, path_1.resolve)("Server/") });
    });
    app.get('/', (req, res, next) => {
        res.sendFile("index.html", { root: (0, path_1.resolve)("dist/honours-project") });
    });
};
exports.routes = routes;
