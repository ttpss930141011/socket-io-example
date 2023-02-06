"use strict";
exports.__esModule = true;
// export const Socket = {
//   emit: function (event: string, id: string, data: socketMsg) {
//     io.to(id).emit(event, data);
//   },
// };
function ioBindEvent(io) {
    io.on('connection', function (socket) {
        console.log('連接成功');
        socket.on('join', function (e) {
            console.log('join', e);
            // socketUserList.set(socket.id, e);
            // 加入成功後返回加入成功的事件
            socket.emit('joined', { id: socket.id });
        });
        // receive a message from the client
        socket.on('send', function (msg) {
            socket.emit('back', { socketId: socket.id, message: msg });
        });
        socket.on('disconnecting', function () {
            console.log('用戶離開，連接斷開');
        });
    });
    return io;
}
exports["default"] = ioBindEvent;
// const socketUserList = new Map();
