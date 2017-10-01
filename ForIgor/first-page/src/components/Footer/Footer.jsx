import React from "react";
import "./Footer.scss";
import logo from "./images/logo_black_text.png";

import FaFacebook from "react-icons/lib/fa/facebook";

export class Footer extends React.Component {
	render(){
		let classes = [];
		classes.push("footer");

		if (this.props.type == "grey") {
			classes.push("grey")
		}

		if (this.props.type == "white") {
			classes.push("white")
		}

		return(
			<div className={classes.join(" ")}>
				<p className="footer-header footer-info">Studego</p>
				<div className="footer-mail"> <a href="mailto:info@studego.com">info@studego.com</a></div>
				<p className="footer-info"> +380 97 461 58 57</p>
				<p className="footer-info">Киев, Украина</p>
				<div className="footer-icon">
					<a href="#" target="_blank">
						<img src={logo}/>
					</a>
				</div>
			</div>
		)
	}
}
