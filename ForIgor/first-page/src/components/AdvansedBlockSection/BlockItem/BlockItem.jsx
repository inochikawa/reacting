import React from "react";
import "./BlockItem.scss";

export class BlockItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initWidth: `${Math.floor(800 / props.totalCount)}px`,
			width: `${Math.floor(800 / props.totalCount)}px`
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
		let liIndex = 0;
		return (
			<div
				className="advansedBlockItem"
				style={{
					width: `${this.state.width}`
				}}>
				<p className="block-header">{this.props.header}</p>
				<ul className="block-list">
					{this.props.list.map(listItem => {
						return <li key={liIndex++}>{listItem}</li>
					})}
				</ul>
			</div>
		)
	}
}
