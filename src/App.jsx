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
import Img4 from "./assets/pueblo.jpg"

const App = () =>{
  return(
    <div className="App">
      <Hero imageSrc={Bg}/>
      <Slider 
        imageSrc={Img2} 
        title={"Paisajes hermosos"}
        subtitle={"Para disfrutar con toda la familia"}
      />
      <Slider 
        imageSrc={Img3} 
        title={"Ciudad de cultura"}
        subtitle={"Conoce la cultura andina y enamorate de ella"}
        flipped={true}
      />
      <Slider 
        imageSrc={Img4} 
        title={"Pueblo ancestral"}
        subtitle={"Descubre la belleza de nuestros pueblos trabajadores"}
        flipped={false}
      />
    </div>
  );
}


export default App;