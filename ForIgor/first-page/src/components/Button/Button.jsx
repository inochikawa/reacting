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

		let onClickHandler = null;

		switch(this.props.type){
			case 1: onClickHandler = this.props.onClick; break; // записатся
			case 2: onClickHandler = this.props.onSendRequest; break; // забронировать место
			case 3: onClickHandler = this.props.onScrollDown; break; // опустить экран вниз
		}

		return (
			<button onClick={onClickHandler} className={classes.join(" ")}>{this.props.children}</button>
		)
	}
}
