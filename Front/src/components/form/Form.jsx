import React, { useState, useEffect } from 'react';
import './form.css';
import axios from 'axios';

function Form() {
	const [argonauteName, setArgonauteName] = useState('');
	const [argonauteList, setArgonauteList] = useState([]);

	useEffect(() => { 
		axios.get('http://localhost:8000/api/get')
			.then((response) => {
				setArgonauteList(response.data);
			});
			}, []);


	const submitName = () => {
		axios.post('http://localhost:8000/api/insert', {
			argonauteName: argonauteName
		}).then(()=> {
			alert("successful insert");
		})
	};
		
	return (
		<div className='form'>
			<h2>Ajouter un(e) Argonaute</h2>
						<p>Nom de l'Argonaute</p>
					<div className="submit-form">
      			<input className="submit-name" type="text" name="name" placeholder="Name" onChange={(e)=> {
							setArgonauteName(e.target.value)
							}}/>
        		<input className="submit-button" type="submit" value="Submit" onClick={submitName}/>
				</div>
			<h2>Membres de l'équipage</h2>
			<div className="user-name">
				{argonauteList.map((argonaute) => {
					return (
						<div key={argonaute.id}>
							<p>{argonaute.argonauteName}</p>
						</div>
					)}
				)}
			</div>
		</div>
	)
}

export default Form;



