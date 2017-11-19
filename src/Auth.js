import React, {Component} from 'react';//
import {isAuthorized, authorizeUser} from './AuthorizeApi';//
import {Redirect} from 'react-router-dom';//

class Auth extends Component {

	constructor(props) {
		super(props);

		this.inputsNames = {
			email: 'email',
			password: 'password',
		}

		this.inputs = {
			email: null,
			password: null,
		};

		this.state = {
			emailInputValue: '',
			passwordInputValue: '',
			isAuthorized,
			hideError: true,
		}
	}


	handleSubmit = () => {

		const isAuthorized = authorizeUser(this.state.emailInputValue, this.state.passwordInputValue);

		this.setState({
			isAuthorized,
			hideError: isAuthorized
		})
	}

	handleInputChange = (event) => {

		const elementName = event.target.name;

		let propName = null;

		if (elementName === this.inputsNames.email) {

			propName = 'emailInputValue';

		} else if (elementName === this.inputsNames.password) {

			propName = 'passwordInputValue';
		}

		this.setState({
			[propName]: event.target.value,
		});
	}

	render() {

		const {emailInputValue, passwordInputValue, isAuthorized, hideError} = this.state;

		if (!isAuthorized) {
			return (
				<div>
					<div>
						<input
							ref={element => this.inputs.email = element}
							name={this.inputsNames.email}
							defaultValue={emailInputValue}
							placeholder="e-mail"
							onChange={this.handleInputChange}/>
						<input
							ref={element => this.inputs.password = element}
							name={this.inputsNames.password}
							defaultValue={passwordInputValue}
							placeholder="password"
							onChange={this.handleInputChange}/>
					</div>
					{!hideError
						? <p className="error">Не верный пароль и/или почта</p>
						: ''
					}
					<button onClick={this.handleSubmit}>Enter</button>
				</div>
			);
		} else {

			return (
				<Redirect to="/"/>
			)
		}
	}
}

export default Auth;
