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
						<Button showAnimation={true} buttonNumber={1}>Забронировать размещение</Button>
					</div>
				</div>
			</div>
		)
	}
}
