import React from "react";
import "./Header.scss";
import logoPic from "./images/logo.png";
import logoPicMin from "./images/logo-min.png";
import PhoneIcon from "react-icons/lib/md/phone";
import { Button } from "./../Button/Button.jsx"

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: window.innerWidth <= 500 ? logoPicMin : logoPic,
			showBack: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this)); // 
		window.addEventListener('ontouchmove', this.handleScroll.bind(this));
		window.addEventListener('resize', this.handleWindowResize.bind(this));
	}

	handleWindowResize() {
		if (window.innerWidth <= 500) {
			this.setState({
				img: logoPicMin
			})
		} else {
			this.setState({
				img: logoPic
			})
		}

	}

	handleScroll(e) {
		if (window.scrollY >= 50) {
			this.setState({
				showBack: true
			})
		}

		if (window.scrollY < 50) {
			this.setState({
				showBack: false
			})
		}
	}

	scrollDown() {
		let target = document.getElementById("request-section");
		this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", window.scrollY, target.offsetTop, 500, true)
	}

	animate(elem, style, unit, from, to, time, prop) {
		if (!elem) {
			return;
		}
		var start = new Date().getTime(),
			timer = setInterval(function () {
				var step = Math.min(1, (new Date().getTime() - start) / time);
				if (prop) {
					elem[style] = (from + step * (to - from)) + unit;
				} else {
					elem.style[style] = (from + step * (to - from)) + unit;
				}
				if (step === 1) {
					clearInterval(timer);
				}
			}, 5);
		if (prop) {
			elem[style] = from + unit;
		} else {
			elem.style[style] = from + unit;
		}
	}

	render() {
		// handleWindowResize();

		let styles = {
			backgroundColor: "rgba(0,0,0,0)"
		}

		if (this.state.showBack) {
			styles = {
				backgroundColor: "black"
			}
		}

		return (
			<div className="header" style={styles}>
				<img src={this.state.img} />
				<div className="main-info">
					<div className="phone-section">
						<PhoneIcon className="phone-icon" /> +380 97 461 58 57
					</div>
					<div className="order-request-section">
						<Button onScrollDown={this.scrollDown.bind(this)} type={3} showAnimation={true} buttonNumber={1}>Забронировать размещение</Button>
					</div>
				</div>
			</div>
		)
	}
}
