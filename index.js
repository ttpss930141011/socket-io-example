"use strict";
exports.__esModule = true;
var express = require("express");
var socket_io_1 = require("socket.io");
var socket_1 = require("./socket");
var port = 3030;
var app = express();
var io = (0, socket_1["default"])(new socket_io_1.Server(3050, { cors: {} }));
app
    .listen(port, function () {
    console.info("server running on port : ".concat(port));
})
    .on("error", function (e) { return console.error(e); });
