import { Card } from './components/card/Card';
import './App.css';
import { Header } from './components/header/Header';
import Basket from './components/basket/Basket';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

	const api = axios.create({
		baseURL: "http://localhost:7001"
	 })

	const [list, setList] = useState(null);
	const [basket, setBasket] = useState(null);
	const [openBasket, setOpenBasket] = useState(false);

	useEffect(() => {
		api.get('/api')
			.then(({ data }) => {
				setList(data.chebyrek);
			});
	}, []);

	useEffect(() => {
		axios.get('https://6411c0db5d0c49b7c5b9068c.mockapi.io/rwerwe')
			.then(({ data }) => {
			setBasket(data);
			}); 
	}, []);

	return (
	<div className='container'>
		<Header onClickBasket={() => setOpenBasket(!openBasket)} />
		<div className='Card'>
			{list ? (
				list.map((item, index) =>
					<Card
						key={index}
						items={item}
					/>
			)) 
			: 
			('загрузка')}
		</div>
		{openBasket ? 
				<Basket
					onClickBasket={() => setOpenBasket(!openBasket)}
					items={basket}
				/>
		: null}
	</div>
  )
}

export default App;
