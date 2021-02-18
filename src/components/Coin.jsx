import { Sparklines } from 'react-sparklines';
import { useState } from 'react';

const Coin = (props) => {
	const {
		name,
		image,
		current_price,
		market_cap,
		symbol,
		market_cap_rank,
		sparkline_in_7d,
	} = props;

	const [sparkData, setSparkData] = useState([sparkline_in_7d]);

	console.log(sparkline_in_7d);
	return (
		<div className='coin-row'>
			<h2>{name}</h2>
			<p>Rank: {market_cap_rank}</p>
			<img src={image} alt={name} />
			<p>Symbol: {symbol}</p>
			<p>${current_price.toLocaleString()}</p>
			<p>Market Cap: ${market_cap.toLocaleString()}</p>
			<div className='chart'>
				<Sparklines
					data={sparkData}
					limit={5}
					width={100}
					height={20}
					margin={5}
				></Sparklines>
			</div>
		</div>
	);
};

export default Coin;
