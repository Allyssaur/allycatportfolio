import './index.css';
// import './components/OtherPages/PV/ArtistGuide.scss'
import { useState } from 'react'
import Home from "./components/Home.jsx";
import AboutMe from "./components/OtherPages/AboutMe/AboutMe.jsx"
// import ArtistGuide from "./components/OtherPages/PV/ArtistGuide.jsx"
// import Overlays from "./components/overlays.jsx"

function App() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
  {/* <Overlays isOpen={isOpen} /> */}

    <div className='maincontainer'>
      <Home />    
      </div>

</>
  );
}

export default App