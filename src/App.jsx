import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import MySwiperJs from "./Components/MySwiperJs";
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio";
import SocialLink from "./Components/SocialLink";



function App() {
 
  return (
    <>
    
     <Navbar/>
     <Home/>
  <MySwiperJs/> 
     <SocialLink/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
    
     
    
      
    </> 
  )
}

export default App;
