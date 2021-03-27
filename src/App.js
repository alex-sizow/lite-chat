import io from 'socket.io-client';
import './App.css';

function App() {
	const connectSocket = () => {
		io('http://localhost:8888');
	};
	return (
		<div className='App'>
			<button onClick={connectSocket}>Connect</button>
		</div>
	);
}

export default App;
