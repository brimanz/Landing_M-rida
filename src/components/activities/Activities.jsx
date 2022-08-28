import React from 'react';
import './Activities.css'
import {GrBike, GrRun, GrYoga, GrSwim} from "react-icons/gr";


const Activities = () =>{
	return(
		<div>
			<h1 className="app__slider_content-title app__activities_main-title">Actividades para realizar en Mérida</h1>
			<div className="app__activities" id="activities">
				<div className="app__activities_content">
					<GrRun className="app__activities_icon"/>
					<h1>Caminata</h1>
					<p>Los mejores lugares para conocer y disfrutar</p>
				</div>

				<div className="app__activities_content">
					<GrBike className="app__activities_icon"/>
					<h1>Ciclismo</h1>
					<p>Rutas hermosas acampañadas de la naturalesa</p>
				</div>

				<div className="app__activities_content">
					<GrSwim className="app__activities_icon"/>
					<h1>Natación</h1>
					<p>Disfruta la belleza de los rios de Mérida</p>
				</div>

				<div className="app__activities_content">
					<GrYoga className="app__activities_icon"/>
					<h1>Yoga</h1>
					<p>Consigue la armonia y relajate</p>
				</div>
			</div>
		</div>
	);
}


export default Activities;