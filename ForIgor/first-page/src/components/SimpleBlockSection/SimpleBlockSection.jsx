import React from "react";
import "./SimpleBlockSection.scss";

import { BlockItem } from "./BlockItem/BlockItem.jsx";

export class SimpleBlockSection extends React.Component {
	render() {
		let blocks = [];
		let info = this.props.blockInfo;
		for (let i = 0; i < info.length; i++) {
			blocks.push(
				<BlockItem
					key={info[i].number}
					number={info[i].number}
					header={info[i].header}
					totalCount={info.length}
					showNumbers={this.props.showNumbers}>
					{info[i].text}
				</BlockItem>
			);
		}

		let classes = [];
		classes.push("simpleBlockSection");

		if (this.props.type == "grey") {
			classes.push("grey")
		}

		if (this.props.type == "white") {
			classes.push("white")
		}

		let header = null;

		if (this.props.showHeader) {
			header = <p className="section-header">{this.props.sectionHeader}</p>;
		}

		return (
			<div className={classes.join(" ")}>
				{header}
				<div className="block-items">
					{blocks}
				</div>
			</div>
		)
	}
}
