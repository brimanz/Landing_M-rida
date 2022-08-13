import React from 'react';

//components import
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Slider from './components/slider/Slider';

//styles
import './index.css';

//images
import Bg from './assets/bg.jpg';
import Img2 from "./assets/paisaje.jpg"
import Img3 from "./assets/cultura.jpg"


const App = () =>{
  return(
    <div className="App">
      <Hero imageSrc={Bg}/>
      <Slider 
        imageSrc={Img2} 
        title={"Pasajes hermosos"}
        subtitle={"Para disfrutar con toda la familia"}
      />
      <Slider 
        imageSrc={Img3} 
        title={"Ciudad de cultura"}
        subtitle={"Conoce la cultura andina y enamorate de ella"}
        flipped={true}
      />
    </div>
  );
}


export default App;