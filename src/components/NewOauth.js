import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './Login/Login.css'

const CLIENT_ID = '221324650717-apsoi42p4mg35gmjipluh6lroo01op1j.apps.googleusercontent.com';
const Client_Secret = 'wRsmTyHmXaysboVE2YLo1GeY'

class GoogleBtn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLogined: false,
			accessToken: '',
		};

		this.login = this.login.bind(this);
		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}
	login(response) {
		console.log(response.accessToken)
		console.log(response);
		if (response.accessToken) {
			this.setState((state) => ({
				isLogined: true,
				accessToken: response.accessToken,
			}));
			localStorage.setItem('isAuthenticated', this.isLogined);
			localStorage.setItem('accessToken',this.accessToken);
		}
	}

	logout(response) {
		this.setState((state) => ({
			isLogined: false,
			accessToken: '',
		}));
		localStorage.setItem('isAuthenticated', this.isLogined);
		localStorage.setItem('accessToken', this.accessToken);
		console.log(this.accessToken)
		
	}

	handleLoginFailure(response) {
		alert('Failed to log in');
	}

	handleLogoutFailure(response) {
		alert('Failed to log out');
	}

	render() {
		return (
			<div>
				{this.state.isLogined ? (
					<GoogleLogout
						clientId={CLIENT_ID}
						buttonText='Logout With Google'
						onLogoutSuccess={this.logout}
						onFailure={this.handleLogoutFailure}
					></GoogleLogout>
				) : (
					<GoogleLogin
						clientId={CLIENT_ID}
						clientSecret = {Client_Secret}
						buttonText='Login with Google'
						onSuccess={this.login}
						uxMode="redirect"
						redirectUri="http://localhost:3000/appdrawer"
						onFailure={this.handleLoginFailure}
						cookiePolicy={'single_host_origin'}
						responseType='code,token'
					/>
				)}
			</div>
		);
	}
}

export default GoogleBtn;
