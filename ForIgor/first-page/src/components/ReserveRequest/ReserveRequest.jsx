import React from "react";
import "./ReserveRequest.scss";
import { Button } from "./../Button/Button.jsx";

import axios from "axios";

export class ReserveRequest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Maxim",
			email: "mxm.stecenko@gmail.com",
			phone: "0935436893",
			isSubscribed: true,
			inputDisabled: false,
			showBtn: true,
		}
	}

	onEmailInputChange(e) {
		var email = e.target.value;
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
		this.setState({
			phone: phone
		})
	}

	sendRequest() {
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

	handleKeyPress(e){
		if (e.key === 'Enter') {
			console.log("Enter pressed");
			this.sendRequest();
		  }
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
						disabled={this.state.inputDisabled}/>

					<input className="flat-input"
						onChange={this.onPhoneInputChange.bind(this)}
						type="email"
						placeholder="Телефон"
						value={this.state.phone} 
						disabled={this.state.inputDisabled}/>


					<input className="flat-input"
						onChange={this.onEmailInputChange.bind(this)}
						type="text"
						placeholder="Почта"
						value={this.state.email} 
						disabled={this.state.inputDisabled}/>

					{/* <button className="send-btn">Забронировать размещение</button> */}

					{buttonItem}

				</div>
			</div>
		)
	}
}
