import React from 'react';
import './Footer.css';
import { GrFacebook, GrLinkedin, GrTwitter } from "react-icons/gr";


const Footer = () =>{
	return(
		<div className="app__footer">
			<div className="app__footer_content">
				<p>Mérida</p>
				<p className="app__footer_content_text">Ciudad hermosa y amable</p>
			</div>	

			<div className="app__footer_links">
				<GrFacebook className="app__footer_icon"/>
				<GrLinkedin className="app__footer_icon"/>
				<GrTwitter className="app__footer_icon"/>
			</div>
		</div>
	);
}


export default Footer;