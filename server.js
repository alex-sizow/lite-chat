const express = require('express');

const app = express();
const server = require('http').Server(app); // вдруг ошибка
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		credentials: true,
	},
});

const rooms = new Map();

app.get('/rooms', function (req, res) {
	res.json(rooms);
});

io.on('connection', (socket) => {
	console.log('user connected', socket.id);
});

server.listen(8888, (error) => {
	if (error) {
		throw Error(error);
	}
	console.log('build server!');
});
