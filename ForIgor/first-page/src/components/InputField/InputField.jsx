import React from "react";
import "./InputField.scss";

export class InputField extends React.Component {
	render() {
		return (
			<input type={this.props.inputType ? this.props.inputType : "text"} 
				   className="inputField" 
				   placeholder={this.props.inputPlaceholder}
				   value={this.props.children} 
				   onChange={this.props.onClick}/>
		)
	}
}
