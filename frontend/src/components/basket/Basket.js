import React, { useState } from 'react'
import './index.css'
import axios from 'axios';
import BasketItem from './BasketItem';

const Basket = ({ onClickBasket,items }) => {

	return (
	<div className='container_basket' >
		<div className='aside_basket'>
			<div className='row_aside'>
				<div className='row_header'>
						<h1>Корзина</h1>
						<img onClick={onClickBasket} src='https://cdn-icons-png.flaticon.com/128/70/70206.png' alt='kek' style={{ cursor: 'pointer' }} width='50px' height='50px'/>
				</div>
				<div>
				{items ? ((items || []).map((item, index) =>
					<BasketItem
						key={index}
						item={item}
					/>
				)) : ('Загрузка')}
				</div>
			</div>
		</div>
	</div>

  )
}

export default Basket