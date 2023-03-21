import React from 'react'
import './index.css'
import axios from 'axios';

export const Card = ({ items }) => {

	const addList = () => {
		axios.post('https://6411c0db5d0c49b7c5b9068c.mockapi.io/rwerwe',	{
			name: items.name,
			descrption: items.description,
			imageUrl: items.imageURL,
			price: items.price
		}).catch(() => {
			alert('Ошибка при добавлении!');
		})
		setInterval(() => {
			window.location.reload()
		}, 1000)
	};

  return (
	<div className='contaibner_card'>
		<div className='card_card'>
			  <img src={items.imageURL} alt="chebyrek" width='150px'/>
			<h1>{items.name}</h1>
			  <p className='description'>{items.description}</p>
			<div className='footer_card'>
				  <p>{items.price}</p>
				<button onClick={addList}>добавить в корзину</button>
			</div>
		</div>
	</div>
  )
}
