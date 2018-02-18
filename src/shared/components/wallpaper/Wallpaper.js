import React from 'react';

// Styles
import styles from './Wallpaper.css';

const Wallpaper = () => (
	<div className={ styles.wallpaper }>
		{ renderWhiteStripes() }
		{ renderRetroRainbow() }
	</div>
);

const renderWhiteStripes = () => {
	return (
		<div className={ styles.whiteStripesWrapper }>
			<span className={ styles.whiteStripe } />
			<span className={ styles.whiteStripe } />
		</div>
	);
}

const renderRetroRainbow = () => {
	return (
		<div className={ styles.retroRainbowWrapper }>
			<span className={ styles.retroStripe } />
			<span className={ styles.retroStripe } />
			<span className={ styles.retroStripe } />
			<span className={ styles.retroStripe } />
			<span className={ styles.retroStripe } />
		</div>
	);
}

export default Wallpaper;
