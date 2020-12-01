import React, { useState } from 'react';
import LogoImg from '../assets/Login.svg';
import './Register.css';
import axios from 'axios';

export default function Register(props) {
	const [userName, setuserName] = useState('');
	const [userEmail, setuserEmail] = useState('');
	const [userPassword, setuserPassword] = useState('');
	const [userDob, setuserDob] = useState('');
	const [userMobile, setuserMobile] = useState('');

	const handelChangeUserName = (text) => {
		console.log(text.target.value);
		setuserName(text.target.value);
	};
	const handelChangeUserEmail = (text) => {
		console.log(text.target.value);
		setuserEmail(text.target.value);
	};
	const handelChangeUserPassword = (text) => {
		setuserPassword(text.target.value);
	};
	const handelChangeUserDob = (text) => {
		setuserDob(text.target.value);
	};
	const handelChangeUserMobile = (text) => {
		setuserMobile(text.target.value);
	};
	const registerSuccessful = () => {
		document.getElementById("msg").innerHTML = "Resisterd Sucessfull!!!"
	}

	const RegisterOnclick = () => {
		let obj = {
			userName: userName,
			userEmail: userEmail,
			userPassword: userPassword,
			userDob: userDob,
			userMobile: userMobile,
		};
		axios
			.post('http://localhost:52511/api/RealEstate', obj, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				if (response) {
					registerSuccessful();
				}
			})
			.catch((response) => { });
			}
		return (
			<div className='BaseContainerr' ref={props.containerRef}>
				<div className='CostumHeader'>Registration</div>
				<div className='Content'>
					<div className='Image'>
						<img src={LogoImg} alt='#' />
					</div>
					{/* <footer>
					<a href=' ' className='fa fa-facebook'>
						{' '}
					</a>
					<a href=' ' className='fa fa-twitter'>
						{' '}
					</a>
					<a href=' ' className='fa fa-google'>
						{' '}
					</a>
				</footer> */}
					<div className = "msg"></div>
					<label>Username :</label>
					<input
						type='text'
						placeholder='Jhon$123'
						value={userName}
						onChange={(text) => {
							handelChangeUserName(text);
						}}
						required
					></input>
					<label>Email :</label>
					<input
						type='email'
						placeholder='exapmle@gmail.com'
						value={userEmail}
						onChange={(text) => {
							handelChangeUserEmail(text);
						}}
						required
					></input>
					<label>Password &nbsp;:</label>
					<input
						type='password'
						placeholder='Password'
						value={userPassword}
						onChange={(text) => {
							handelChangeUserPassword(text);
						}}
						required
					></input>
					<label>DOB &nbsp;:</label>
					<input
						className='dob'
						// type='date time'
						type='date'
						id='start'
						name='trip-start'
						// value='2018-07-22'
						min='2020-01-01'
						max='2020-12-31'
						placeholder='DD/MM/YYYY'
						value={userDob}
						onChange={(text) => {
							handelChangeUserDob(text);
						}}
						required
					></input>
					<label>Phone &nbsp;:</label>
					<input
						className='phone'
						type='tel'
						pattern='[+]{1}[0-9]{11,14}'
						placeholder='1234-456-789'
						value={userMobile}
						onChange={(text) => {
							handelChangeUserMobile(text);
						}}
					></input>
					<label>Address &nbsp;:</label>
					<input
						type='text'
						name='Address'
						placeholder='Lane no. Landmark , Appartment Name.'
						required
					></input>
				</div>
				<div className='Footer'>
					<button className='butn' type='Button' onClick={RegisterOnclick}>
						Register
				</button>
				</div>
			</div>
		);
	};
// export default Register;
