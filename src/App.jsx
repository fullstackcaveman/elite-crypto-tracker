import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/index';
import Coin from './components/Coin';
import './App.css';

function App() {
	const [coinList, setCoinList] = useState([]);
	const [baseCurrency, setBaseCurrency] = useState('usd');

	useEffect(() => {
		axios
			.get(
				`${BASE_URL}?vs_currency=${baseCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h`
			)
			.then((res) => {
				setCoinList(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [baseCurrency]);

	if (!coinList) return <h3>Loading...</h3>;

	return (
		<div className='App'>
			<h1>Elite Crypto Tracker</h1>
			<form>
				<input type='text' placeholder='Search Coins' />
			</form>
			<h2>Top 100 Coins By Market Cap</h2>
			{coinList.map((coin) => {
				return <Coin key={coin.id} {...coin} />;
			})}
		</div>
	);
}

export default App;
