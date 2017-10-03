import React from "react";
import "./Banner.scss";
import bannerBackPic from "./images/back.jpg";

import { Header } from "./../Header/Header.jsx";
import { Timer } from "./../Timer/Timer.jsx";
import { Button } from "./../Button/Button.jsx"
import { InputField } from "./../InputField/InputField.jsx"
import { animateScroll } from "./../../shareFunctions.jsx";

import axios from "axios";

export class Banner extends React.Component {

	scrollDown() {
		let target = document.getElementById("request-section");
		animateScroll(document.scrollingElement || document.documentElement, "scrollTop", "", window.scrollY, target.offsetTop, 500, true)
	}

	render() {
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
							<div className="button-item">
								<Button
									onClick={this.scrollDown.bind(this)}
									showAnimation={true}
									className="subscribe-btn"
									buttonNumber={2}
									type={1}>Да, сообщить</Button>
							</div>
						</div>

					</div>
				</div>

			</div>
		)
	}
}
