import React from "react";
import "./ReserveRequest.scss";
import { Button } from "./../Button/Button.jsx";

import axios from "axios";

export class ReserveRequest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			isSubscribed: true,
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

	sendRequest() {
		axios.post("studego.dev/subscribers/store", {
			email: this.state.email,
			name: this.state.name,
			type: 2
		})
			.then((response) => {
				var res = response.data;

				if (res) {
					this.setState({
						showBtn: false
					})
				} else {
					this.setState({
						isSubscribed: true,
						showBtn: false
					})
				}
			})
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
		} else if (this.state.isSubscribed) {
			buttonItem = <span>Извините, Вы уже забронировали!</span>
		} else {
			buttonItem = <span>Спасибо! Вы забронировали размещение.</span>
		}

		return (
			<div className={classes.join(" ")} id="request-section">
				<div className="request-content">
					<p className="request-header">Забронируй размещение на Studego и найди крутого кандидата сразу после открытия.</p>

					<input className="flat-input"
						onChange={this.onEmailInputChange.bind(this)}
						type="text"
						placeholder="Почта"
						value={this.state.email} />

					<input className="flat-input"
						onChange={this.onNameInputChange.bind(this)}
						type="text"
						placeholder="Имя"
						value={this.state.name} />

					{/* <button className="send-btn">Забронировать размещение</button> */}

					{buttonItem}

				</div>
			</div>
		)
	}
}
