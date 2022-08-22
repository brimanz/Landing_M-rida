import React from 'react';
import './Title.css';


const Title = ({title}) =>{
	return(
		<div className="app__title">
			<h1>{title}</h1>
		</div>
	);
}


export default Title;