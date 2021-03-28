import io from 'socket.io-client';

function App() {
	const connectSocket = () => {
		io('http://localhost:8888');
	};
	return (
		<div className='wrapper'>
			<div className='join-block'>
				<input type='text' placeholder='Room ID' />
				<input type='text' placeholder='Ваше имя' />
				<button class='btn btn-success'>ВОЙТИ</button>
			</div>
		</div>
	);
}

export default App;
