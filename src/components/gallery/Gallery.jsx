import React, {useState} from 'react';
import './Gallery.css';
import {AiFillCloseCircle} from "react-icons/ai";


import{ Img1, Img22, Img33, Img44, Img55, Img66, Img77, Img8, Img9, Img10, Img11} from '../../assets';


const Gallery = () =>{

	let data = [
		{
			id: 1,
			imageSrc: Img1,
		},
		{
			id: 2,
			imageSrc: Img22, 
		}, 
		{
			id: 3,
			imageSrc: Img33, 
		},
		{
			id: 4,
			imageSrc: Img44,
		},
		{
			id: 5,
			imageSrc: Img55, 
		}, 
		{
			id: 6,
			imageSrc: Img66, 
		}, 
		{
			id: 7,
			imageSrc: Img77,
		}, 
		{
			id: 8,
			imageSrc: Img8,
		}, 
		{
			id: 9,
			imageSrc: Img9,
		},
		{
			id: 10,
			imageSrc: Img10
		},   
		{
			id: 11,
			imageSrc: Img11
		}  
	]

	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState("");

	const getImg = (imageSrc) =>{
		setTempImgSrc(imageSrc);
		setModel(true);
	}


	return(
		<>
			<div className={model ? "model open": "model"}>
				<img src={tempImgSrc}/>
				<AiFillCloseCircle 
					className="model_icon"
					color="#c31432"
					onClick={() => setModel(false)}
				/>
			</div>


			<div className="app__gallery" id="gallery">
				{data.map((item, index) =>{
					return(
						<div 
							className="app__gallery_pics" 
							key={index}
							onClick={() => getImg(item.imageSrc)}
						>
							<img src={item.imageSrc}/>
						</div>
					)
				})}
			</div>
		</>
	);
}


export default Gallery;