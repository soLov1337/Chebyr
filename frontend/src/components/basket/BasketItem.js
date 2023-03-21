import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios';

const Basket = ({ item }) => {
	
	const [inputValue, setInputValue] = useState();

	const removeList = (items) => {
		{
			axios.delete(`https://6411c0db5d0c49b7c5b9068c.mockapi.io/rwerwe/${items}`)
		}
		setInterval(() => {
			window.location.reload()
		}, 1000)
	}

	const editItem = (newName) => {
		setInputValue(newName);
		item.name = newName;
	}

	useEffect(() => {
		setInputValue(item.name);
	}, []);

	const [editMode, setEditMode] = useState(false);

	const putItem = (item) => {
		axios.put(`https://6411c0db5d0c49b7c5b9068c.mockapi.io/rwerwe/${item.id}`, item)
			.catch(() => {
				alert('Ошибка при редактировании!');
			})
		setEditMode(false);
	}

	return (
		<div className='aside'>
			<img src={item.imageUrl} width='60px' height='60px' />
			{
				editMode ?
						<input
							value={inputValue}
							onChange={e => editItem(e.target.value)}
							type="text"
						/>
						: <p>{item.name}</p>
			}
			<p>{item.price}</p>
			{editMode ?
				<button onClick={() => putItem(item)}>Сохранить</button>
				: <button onClick={() => setEditMode(true)}>Редактировать</button>}
			<img onClick={() => removeList(item.id)} src='https://cdn-icons-png.flaticon.com/128/70/70206.png' style={{ cursor: 'pointer' }} width='30px' height='30px' />
		</div>
  )
}

export default Basket