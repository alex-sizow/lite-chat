const express = require('express');
const useSocket = require('socket.io');
const app = express();

const server = require('https').Server(app); // вдруг ошибка

const rooms = new Map();

app.get('/users', function (req, res) {
	rooms.set('hello', '');
	console.log(rooms);
	res.json(rooms);
});

app.listen(8888, (error) => {
	if (error) {
		throw Error(error);
	}
	console.log('build server!');
});
