import React from 'react';
import './Hero.css';


const Hero = ({imageSrc}) =>{
	return(
		<div className="app__hero">
			<img 
				src={imageSrc} 
				alt="hero_bg" 
				className="app__hero_image"
			/>

			<h1 className="app__hero_title">Visita Mérida</h1>
			<p className="app__hero_subtitle">Ciudad hermosa y amable</p>
		</div>
	);
}


export default Hero;