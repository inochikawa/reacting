import React from "react";
import "./AdvansedBlockSection.scss";

import { BlockItem } from "./BlockItem/BlockItem.jsx";

export class AdvansedBlockSection extends React.Component {
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
					list={info[i].list}
					showImgSection={this.props.showImgSection}
					img={info[i].img}
					>
					{info[i].text}
				</BlockItem>
			);
		}

		let classes = [];
		classes.push("advansedBlockSection");

		if(this.props.type == "grey"){
			classes.push("grey")
		}

		if(this.props.type == "white"){
			classes.push("white")
		}

		let afterHeaderText = null;

		if(this.props.afterHeaderText){
			afterHeaderText = <p className="after-headre-text">{this.props.afterHeaderText}</p>
		}

		return (
			<div className={classes.join(" ")}>
				<p className="section-header">{this.props.sectionHeader}</p>
				{afterHeaderText}
				<div className="block-items">
					{blocks}
				</div>
			</div>
		)
	}
}
