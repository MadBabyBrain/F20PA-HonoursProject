import express from 'express'
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { resolve } from "path";
// import cors from "cors";

import localtunnel from 'localtunnel';

import { routes } from './app'
import { server } from './server'

// (async () => {
//     const tunnel = await localtunnel({ port: 3000 });

//     console.log("tunnel on port 3000", tunnel.url)

    
const app = express()
const http = createServer(app);
const io = new Server(http, { cors: { origin: '*' }, maxHttpBufferSize: 1e8, pingTimeout: 60000 });


// app.use(cors());
app.use(express.static(resolve("./dist/honours-project")))

routes(app)
server(io)

const port_num = http.listen(3000, () => { console.log(`listening on port ${3000}`) })
// })()
// app.listen(4000)