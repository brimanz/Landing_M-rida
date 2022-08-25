import React, {useState} from 'react';
import './Gallery.css';
import {AiFillCloseCircle} from "react-icons/ai";


import Img1 from '../../assets/para1.jpg';
import Img2 from '../../assets/nieve.jpg';
import Img3 from '../../assets/obs2.jpg';
import Img4 from '../../assets/laguna3.jpg';
import Img5 from '../../assets/laguna2.jpg';
import Img6 from '../../assets/para2.jpg';
import Img7 from '../../assets/laguna4.jpg';
import Img8 from '../../assets/tele.jpg';
import Img9 from '../../assets/nieve2.jpg';
import Img10 from '../../assets/obs1.jpg';
import Img11 from '../../assets/para3.jpg';


const Gallery = () =>{

	let data = [
		{
			id: 1,
			imageSrc: Img1,
		},
		{
			id: 2,
			imageSrc: Img2, 
		}, 
		{
			id: 3,
			imageSrc: Img3, 
		},
		{
			id: 4,
			imageSrc: Img4,
		},
		{
			id: 5,
			imageSrc: Img5, 
		}, 
		{
			id: 6,
			imageSrc: Img6 
		}, 
		{
			id: 7,
			imageSrc: Img7
		}, 
		{
			id: 8,
			imageSrc: Img8
		}, 
		{
			id: 9,
			imageSrc: Img9
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