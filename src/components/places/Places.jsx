import React from 'react';
import './Places.css';
import {useInView} from 'react-intersection-observer';


const Places = ({imageSrc, title, subtitle, flipped}) =>{

	const {ref, inView} = useInView({
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
						className="app__places_image"
					/>
					
					<div className="app__places_content">
						<h1 className="app__places_content-title">
							{title}
						</h1>
						<p>{subtitle}</p>
					</div>
				</>
			);
		}else{
			return(
				<>
					<div className="app__places_content">
						<h1 className="app__places_content-title">
							{title}
						</h1>
						<p>{subtitle}</p>
					</div>

					<img 
						src={imageSrc} 
						alt="slider_image" 
						className="app__places_image"
					/>
				</>
			);
		}
	}


	return(
		<div 
			className={inView ? "app__places app__places--zoom" : "app__places"} 
			ref={ref}
			id="places"
		>
			{renderContent()}			
		</div>
	);
}


export default Places;