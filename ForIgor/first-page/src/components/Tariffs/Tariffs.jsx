import React from "react";
import "./Tariffs.scss";
import { TariffItem } from "./TariffItem/TariffItem.jsx";

export class Tariffs extends React.Component {
	render() {
		let blocks = [];
		let info = this.props.blockInfo;
		for (let i = 0; i < info.length; i++) {
			blocks.push(
				<TariffItem
					key={info[i].number}
					header={info[i].header}
					totalCount={info.length}
					img={info[i].img}>
					{info[i].text}
				</TariffItem>
			);
		}

		let classes = [];
		classes.push("tariffs");

		if (this.props.type == "grey") {
			classes.push("grey")
		}

		if (this.props.type == "white") {
			classes.push("white")
		}

		return (
			<div className={classes.join(" ")}>
				<p className="section-header">{this.props.sectionHeader}</p>
				<p className="section-text">Мы не имеем тарифных планов и пакетных услуг.</p>
				<p className="section-text">Вы нам платите за закрытую вакансию!</p>


				<div className="discount">
					<div className="discount-number">
						<p className="small-number">500</p>
						<p className="big-number">250 грн.</p>
					</div>
					<p className="small-text">до официального открытия</p>
					<p className="big-text">Если мы не будем вам полезны и не подберем подходящего кандидата, тогда вернем ваши деньги в ДВОЙНЕ!</p>
				</div>
			</div>
		)
	}
}
