import React, { Component } from 'react';
// Styles
import styles from './InputText.css';

class InputText extends Component {
	render() {
		return (
			<div className={ styles.InputText }>
				<input type="text" placeholder="Insert city" />

			</div>
		);
	}
}

export default InputText;
