import React from 'react';
import './Slider.css';
import {useInView} from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, flipped}) =>{

	const {ref, inView, entry} = useInView({
		/*options*/
		threshold: 0.3,
	});

	const renderContent = () =>{
		if(!flipped){
			return (
				<>
					<img 
						src={imageSrc} 
						alt="img1" 
						className="app__slider_imgage"
					/>
					
					<div className="app__slider_content">
						<h1 className="app__slider_content-title">
							{title}
						</h1>
						<p>{subtitle}</p>
					</div>
				</>
			);
		}else{
			return(
				<>
					<div className="app__slider_content">
						<h1 className="app__slider_content-title">
							{title}
						</h1>
						<p>{subtitle}</p>
					</div>

					<img 
						src={imageSrc} 
						alt="slider_image" 
						className="app__slider_imgage"
					/>
				</>
			);
		}
	}


	return(
		<div 
			className={inView ? "app__slider app__slider--zoom" : "app__slider"} 
			ref={ref}
			id="about"
		>
			{renderContent()}			
		</div>

	);
}


export default Slider;