import React, { Component } from 'react';
// Styles
import styles from './InputText.css';

class InputText extends Component {
	render() {
		return (
			<input type="text"
				className={ styles.inputText }
				placeholder="Insert city"/>
		);
	}
}

export default InputText;
