// import React, { useState, useEffect } from 'react';
// import './form.css';
// import axios from 'axios';

// function Form() {
// 	const [argonauteName, setArgonauteName] = useState('');
// 	const [argonauteList, setArgonauteList] = useState([]);

// 	const submitName = () => {

// 		if (argonauteName === '') {
// 			alert("Veuillez entrer un nom d'argonaute");
// 		} else {
// 			axios.post('http://localhost:8000/api/insert', {
// 				argonauteName: argonauteName
// 			}).then(()=> {
// 				alert("successful insert");
// 			}).then(() => {
// 				axios.get('http://localhost:8000/api/get')
// 					.then((response) => {
// 						setArgonauteList(response.data);
// 					}).then(() => {
// 						setArgonauteName('');
// 					}).catch((error) => {
// 						console.log(error);
// 					}
// 				);
// 			}).catch((error) => {
// 				console.log(error);
// 			}
// 		);
// 		}
// 	}