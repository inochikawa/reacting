import React from "react";
import "./BlockItem.scss";

export class BlockItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initWidth: `${Math.floor(window.innerWidth * 0.7 / props.totalCount)}px`,
			width: `${Math.floor(window.innerWidth * 0.7 / props.totalCount)}px`
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.onWindowResize.bind(this));
	}

	componentWillUnount() {
		window.removeEventListener("resize");
	}

	onWindowResize() {
		if (window.innerWidth <= 600) {
			this.setState({
				width: "100%"
			})
		} else {
			this.setState({
				width: this.state.initWidth
			})
		}
	}

	render() {

		let numberSection = null;

		if (this.props.showNumbers) {
			numberSection = <div className="number-holder">
				<div className="number">
					{this.props.number}
				</div>
			</div>
		}
		return (
			<div
				className="blockItem"
				style={{
					width: `${this.state.width}`
				}}>
				{numberSection}
				<p className="block-header">{this.props.header}</p>
				<p className="block-text">{this.props.children}</p>
			</div>
		)
	}
}
