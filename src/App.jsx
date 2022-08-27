import React from 'react';
import './index.css';

//components import
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Slider from './components/slider/Slider';
import Activities from './components/activities/Activities';
import Places from './components/places/Places';
import Title from './components/title/Title';
import Gallery from './components/gallery/Gallery';

//images
import Bg from './assets/bg.jpg';
import Img2 from "./assets/paisaje.jpg"
import Img3 from "./assets/cultura.jpg"
import Img4 from "./assets/pueblo.jpg"
import Img5 from "./assets/laguna.jpg"
import Img6 from "./assets/merida.jpg"
import Img7 from "./assets/zoo.jpg"

//navbar elements
const navbarLinks = [
  {url: "#home", title: "Home" },
  {url: "#about", title: "Sobre merida" },
  {url: "#activities", title: "Actividades" },
  {url: "#places", title: "Lugares" },
  {url: "#gallery", title: "Galería" },
];


const App = () =>{
  return(
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={Bg}/>

      <Title
        title={"Sobre Mérida"}
      />
      {/*about merida*/}
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

      <Activities/>

      <Title
        title={"Lugares que debes Visitar"}
      />
      {/*merida places*/}
      <Places 
        imageSrc={Img5} 
        title={"Lagunas y aguas termales"}
        subtitle={"Lugares hermosos y llenos de romance"}
        flipped={true}
      />
      <Places 
        imageSrc={Img6} 
        title={"Páramos lugares de altura"}
        subtitle={"Tierra donde los trabajadores cultivan"}
        flipped={false}
      />
      <Places 
        imageSrc={Img7} 
        title={"Parque zoologico"}
        subtitle={"Lugar emblemático para compartir y disfrutar"}
        flipped={true}
      />

      <Title
        title={"Galería de imagenes"}
      />

      <Gallery/>

    </div>
  );
}


export default App;