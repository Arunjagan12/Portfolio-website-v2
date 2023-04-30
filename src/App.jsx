import { BrowserRouter } from "react-router-dom";

import { About , Contact , Experience , Hero , Navbar ,Tech , Works , StarsCanvas, Social } from './components';

const App= () => {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />

        </div>
        <About />
        <Experience />
        <div className="relative z-0">
        <Tech />
        <StarsCanvas />
        </div>
       
      <div>
      <Social />
        <Works />
      </div>
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
        
    
      </div>
    </BrowserRouter>
  )
}

export default App
