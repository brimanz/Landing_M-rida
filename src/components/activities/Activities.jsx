import React from 'react';
import './Activities.css'


const Activities = () =>{
	return(
		<div className="app__activities" id="activities">
			<div className="app__activities_content">
				<h1>Caminata</h1>
				<p>Los mejores lugares para conocer y disfrutar</p>
			</div>

			<div className="app__activities_content">
				<h1>Ciclismo</h1>
				<p>Rutas hermosas acampañadas de la naturalesa</p>
			</div>

			<div className="app__activities_content">
				<h1>Canotaje</h1>
				<p>Para disfrutar de la fuerza y el poder de los rios de Mérida</p>
			</div>

			<div className="app__activities_content">
				<h1>Paracaidismo y parapente</h1>
				<p>Para disfrutar de los cielos de Mérida y sentir la adrenalida en todo el cuerpo</p>
			</div>
		</div>
	);
}


export default Activities;