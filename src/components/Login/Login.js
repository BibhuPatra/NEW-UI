import React, { useState } from 'react';
import './Login.css';
import LogoImg from '../assets/Register.svg';
import axios from 'axios';
import Btn from '../NewOauth';

function Login(props) {
	const [userName, setuserName] = useState('');
	const [userPassword, setuserPassword] = useState('');
	const [Redirect, setRedirect] = useState(false);

	const handelChangeUserName = (text) => {
		setuserName(text.target.value);
	};
	const handelChangeUserPassword = (text) => {
		setuserPassword(text.target.value);
	};const handleRedirect = (text) => {
		setRedirect(text);
		console.log("test")
	};
	const renderRedirect = () => {
		return Redirect ? (
			<Redirect
				to={{
					pathname: '/'
				}}
			/>
		) : null;
	};
	const LoginOnclick = () => {
		let obj = {
			userName: userName,
			Password: userPassword,
		};
		const URL = 'http://localhost:52511/api/Login/AuthorizeUser';
		axios
			.post(URL, obj, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response.data);
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('userName', userName);
				localStorage.setItem('isAuthenticated', true);
				// handleRedirect(true);
				// if(response) return <Redirect to='/Product' />;
			})
			.catch((response) => {
				console.log(response);
			});
	};
	return (
		<>
			<div className='BaseContainer' ref={props.containerRef}>
				{renderRedirect()}
				<div className='CostumHeader'> Login </div>
				<div className='Content'>
					<div className='Image'>
						<img src={LogoImg} alt='#' />
					</div>
					<label> Username &nbsp;: </label>
					<input
						type='text'
						placeholder='Jhon$123'
						value={userName}
						onChange={(text) => {
							handelChangeUserName(text);
						}}
						required
					></input>
					<br />
					<label> Password &nbsp;: </label>
					<input
						type='password'
						placeholder='Password'
						value={userPassword}
						onChange={(text) => {
							handelChangeUserPassword(text);
						}}
						required
					></input>
				</div>
				<div className='Footer'>
					<button className='butn' type='Button' onClick={LoginOnclick}>
						Login
					</button>
				</div>
				<footer>
					{/* <a href=' ' className='fa fa-facebook'></a>
							<a href=' ' className='fa fa-twitter'>
											
										</a> */}
					<Btn className='fa fa-google' />
				</footer>
			</div>
		</>
	);
}

export default Login;
