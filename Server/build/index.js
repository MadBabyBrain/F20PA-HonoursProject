"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const path_1 = require("path");
const app_1 = require("./app");
const server_1 = require("./server");
// (async () => {
//     const tunnel = await localtunnel({ port: 3000 });
//     console.log("tunnel on port 3000", tunnel.url)
const app = (0, express_1.default)();
const http = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(http, { cors: { origin: '*' }, maxHttpBufferSize: 1e8, pingTimeout: 60000 });
// app.use(cors());
app.use(express_1.default.static((0, path_1.resolve)("./dist/honours-project")));
(0, app_1.routes)(app);
(0, server_1.server)(io);
const port_num = http.listen(3000, () => { console.log(`listening on port ${3000}`); });
// })()
// app.listen(4000)
