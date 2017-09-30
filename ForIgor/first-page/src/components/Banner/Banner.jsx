import React from "react";
import "./Banner.scss";
import bannerBackPic from "./images/back.jpg";

import { Header } from "./../Header/Header.jsx";
import { Timer } from "./../Timer/Timer.jsx";
import { Button } from "./../Button/Button.jsx"
import { InputField } from "./../InputField/InputField.jsx"

import axios from "axios";

export class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubscribed: false,
			showBtn: true,
			email: ""
		}
	}


	sendEmail() {
		axios.post("studego.dev/subscribers/store", {
			email: this.state.email,
			type: 1
		})
			.then((response) => {
				var res = response.data;

				if (res) {
					this.setState({
						showBtn: false
					})
				} else {
					this.setState({
						isSubscribed: true
					})
				}
			})
	}

	onEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	render() {
		let item = null;

		if (this.state.showBtn) {
			item = <Button onClick={this.sendEmail.bind(this)} showAnimation={true} className="subscribe-btn" buttonNumber={2}>Подписаться</Button>
		} else if (this.state.isSubscribed) {
			item = <span>Спасибо, Вы уже подписаны!</span>
		} else {
			item = <span>Спасибо!</span>
		}

		return (
			<div className="banner">
				<div className="shading">
				</div>

				<div className="banner-center">
					<div className="banner-content">
						<p className="banner-text">
							Studego - это самое очевидное место для поиска молодых талантов, выпускников и студентов
						</p>

						<div className="timer-content">
							<p className="timer-text">Познакомтесь с будущим сотрудником через:</p>
							<div className="timer-item">
								<Timer targetDate={new Date(2017, 9, 15)} />
							</div>
						</div>

						<div className="subscribe-content">
							<div className="input-item">
								<InputField onClick={this.onEmailChange.bind(this)} inputPlaceholder="Имя"></InputField>
							</div>
							<div className="button-item">
								{item}
							</div>
						</div>

					</div>
				</div>

			</div>
		)
	}
}
