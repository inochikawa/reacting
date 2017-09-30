import React from "react";
import "./Timer.scss";

export class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.getAviableTime = this.getAviableTime.bind(this);

		this.state = {
			aviableTime: "00:00:00:00"
		}
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			let aviableTime = this.getAviableTime();
			this.setState({
				aviableTime: aviableTime
			});
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	getAviableTime() {
		let targetDate = this.props.targetDate;
		let currentDate = new Date();

		if (targetDate <= currentDate) {
			return "00:00:00:00";
		}

		let timeDiff = targetDate - currentDate; // result in miliseconds

		let seconds = timeDiff / 1000;
		let minutes = seconds / 60;
		let hours = minutes / 60;
		let days = hours / 24;

		let aviableDays = Math.floor(days);
		let aviableHours = Math.floor(hours - (aviableDays * 24));
		let aviableMinutes = Math.floor(minutes - (((aviableDays * 24) + aviableHours) * 60));
		let aviableSeconds = Math.floor(seconds - (((((aviableDays * 24) + aviableHours) * 60) + aviableMinutes) * 60));

		let aviableTime = `${aviableDays}:${aviableHours}:${aviableMinutes}:${aviableSeconds}`;

		let times = aviableTime.split(":");

		let formattedTime = times.map(t => {
			if(t.length == 1){
				t = `0${t}`;
			}
			return t;
		})

		return formattedTime.join(":");
	}



	render() {
		return (
			<p className="timer">
				{this.state.aviableTime}
			</p>
		)
	}
}
