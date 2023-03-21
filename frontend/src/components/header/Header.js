import React from 'react'
import './index.css'

import korzina from '../image/korzina.png'

export const Header = ({onClickBasket}) => {
	return (
	 <div className='container_header'>
		<h1>Лучшие чебуреки Ростова</h1>
		<img onClick={onClickBasket} className='korzina' src={korzina} draggable={false} alt=''/>
	 </div>
	)
}
