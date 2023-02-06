import { Server } from 'socket.io';

// export const io = new Server(3002, {
//   cors: {
//     // origin: 'http://localhost:8080',
//   },
// });

interface socketMsg {
  socketId: string;
  source: string;
  message: any;
}
// export const Socket = {
//   emit: function (event: string, id: string, data: socketMsg) {
//     io.to(id).emit(event, data);
//   },
// };

export default function ioBindEvent(io: Server) {
  io.on('connection', (socket) => {
    console.log('連接成功');

    socket.on('join', (e) => {
      console.log('join', e);
      // socketUserList.set(socket.id, e);
      // 加入成功後返回加入成功的事件
      socket.emit('joined', { id: socket.id });
    });
    // receive a message from the client
    socket.on('send', (msg) => {
      socket.emit('back', { socketId: socket.id, message: msg } as socketMsg);
    });

    socket.on('disconnecting', () => {
      console.log('用戶離開，連接斷開');
    });
  });
  return io;
}
// const socketUserList = new Map();
