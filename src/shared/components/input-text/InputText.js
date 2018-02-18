import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './InputText.css';

const InputText = ({ handleOnChange }) => {
	function inputUpdate(e) {
		handleOnChange(e.target.value);
	}

	return (
		<input type="text"
			onChange={ (e) => inputUpdate(e) }
			className={ styles.inputText }
			placeholder="Insert city"/>
	);
};

InputText.propTypes = {
	inputUpdate: PropTypes.func,
};

export default InputText;
