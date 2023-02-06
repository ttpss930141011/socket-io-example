import * as express from 'express';
import { Server } from 'socket.io';
import ioBindEvent from './socket';
const port = 3030;
const app = express();
const io = ioBindEvent(new Server(3050, { cors: {} }));

app
  .listen(port, () => {
    console.info(`server running on port : ${port}`);
  })
  .on("error", (e) => console.error(e));
