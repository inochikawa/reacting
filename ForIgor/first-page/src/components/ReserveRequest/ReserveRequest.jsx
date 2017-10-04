import React from "react";
import "./ReserveRequest.scss";
import { Button } from "./../Button/Button.jsx";

import axios from "axios";

const errorMessage = {
	email: `Укажите, пожалуйста, почту корректно. Пример: abc@gmail.com`,
	phone: `Укажите, пожалуйста, телефон корректно.`
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\+?[\d\s\(\)]{9,20}$/;


export class ReserveRequest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			isSubscribed: true,
			inputDisabled: false,
			formErrors: { email: null, phone: null },
			showBtn: true,
		}
	}

	onEmailInputChange(e) {
		var email = e.target.value;

		if (!emailRegex.test(email)) {
			this.setState({
				formErrors: {
					email: errorMessage.email,
				}
			})
		} else {
			this.setState({
				formErrors: {
					email: null
				}
			})
		}

		this.setState({
			email: email
		})
	}

	onNameInputChange(e) {
		var name = e.target.value;
		this.setState({
			name: name
		})
	}

	onPhoneInputChange(e) {
		var phone = e.target.value;

		if (!phoneRegex.test(phone)) {
			this.setState({
				formErrors: {
					phone: errorMessage.phone
				}
			})
		} else {
			this.setState({
				formErrors: {
					phone: null
				}
			})
		}

		this.setState({
			phone: phone
		})
	}

	sendRequest() {
		if (this.validateFields()) {
			axios.post("http://1125064.kirillb.web.hosting-test.net/subscribers/store", {
				email: this.state.email,
				name: this.state.name,
				phone: this.state.phone
			})
				.then((response) => {
					var res = response.data;

					if (res) {
						this.setState({
							showBtn: false,
							inputDisabled: true
						})
					} else {
						this.setState({
							isSubscribed: true,
							showBtn: false,
							inputDisabled: true
						})
					}
				})
		}
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			console.log("Enter pressed");
			this.sendRequest();
		}
	}

	validateFields() {
		let isEmailValid = emailRegex.test(this.state.email);
		let isPhoneValid = phoneRegex.test(this.state.phone);

		if (!isEmailValid && !isPhoneValid) {
			this.setState({
				formErrors: {
					email: errorMessage.email,
					phone: errorMessage.phone
				}
			})
			return false;
		}

		if (!isEmailValid) {
			this.setState({
				formErrors: {
					email: errorMessage.email,
					phone: null
				}
			})
			return false;
		}

		if (!isPhoneValid) {
			this.setState({
				formErrors: {
					email: null,
					phone: errorMessage.phone
				}
			})
			return false;
		}

		return true;
	}

	render() {

		let classes = [];
		classes.push("reserveRequest");

		if (this.props.type == "grey") {
			classes.push("grey")
		}

		if (this.props.type == "white") {
			classes.push("white")
		}

		let emailInputClasses = ["flat-input"];
		let phoneInputClasses = ["flat-input"];

		let buttonItem = null;

		if (this.state.showBtn) {
			buttonItem = <Button
				onSendRequest={this.sendRequest.bind(this)}
				showAnimation={true}
				buttonNumber={1}
				type={2}>
				Забронировать размещение
					</Button>
		} else {
			buttonItem = <span>Спасибо!</span>
		}

		let phoneError = null;
		let emailError = null;

		if (this.state.formErrors.email) {
			emailError =
				<p className="error-text">{this.state.formErrors.email}</p>
			emailInputClasses.push("error-input");
		}

		if (this.state.formErrors.phone) {
			phoneError =
				<p className="error-text">{this.state.formErrors.phone}</p>
			phoneInputClasses.push("error-input");
		}

		return (
			<div
				className={classes.join(" ")}
				id="request-section"
				onKeyPress={this.handleKeyPress.bind(this)}>
				<div className="request-content">
					<p className="request-header">Забронируй размещение на Studego и найди крутого кандидата сразу после открытия.</p>


					<input className="flat-input"
						onChange={this.onNameInputChange.bind(this)}
						type="text"
						placeholder="Имя"
						value={this.state.name}
						disabled={this.state.inputDisabled} />

					<input className={phoneInputClasses.join(" ")}
						onChange={this.onPhoneInputChange.bind(this)}
						type="text"
						placeholder="Телефон"
						value={this.state.phone}
						disabled={this.state.inputDisabled} />

					{phoneError}

					<input className={emailInputClasses.join(" ")}
						onChange={this.onEmailInputChange.bind(this)}
						type="text"
						placeholder="Почта"
						value={this.state.email}
						disabled={this.state.inputDisabled} />

					{emailError}

					{buttonItem}

				</div>
			</div>
		)
	}
}
