import React from "react";
import "./Button.scss";

export class Button extends React.Component {
	render() {

		let classes = ["button"];

		if (this.props.buttonNumber == 1) {
			classes.push("first-back-color");
		}

		if (this.props.buttonNumber == 2) {
			classes.push("second-back-color");
		}


		if (this.props.showAnimation) {
			if (this.props.buttonNumber == 1) {
				classes.push("button-animate-blink-first");
			}

			if (this.props.buttonNumber == 2) {
				classes.push("button-animate-blink-second");
			}
		}

		return (
			<button onClick={this.props.onClick} className={classes.join(" ")}>{this.props.children}</button>
		)
	}
}
