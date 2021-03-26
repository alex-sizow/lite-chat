const express = require('express');
const Socket = require('socket.io');

const app = express();
const server = require('https').Server(app); // вдруг ошибка
const io = Socket(server);

const rooms = new Map();

app.get('/users', function (req, res) {
	rooms.set('hello', '');
	console.log(rooms);
	res.json(rooms);
});

io.on('connection', (socket) => {
	console.log('socket connected');
});

server.listen(8888, (error) => {
	if (error) {
		throw Error(error);
	}
	console.log('build server!');
});
