import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
/* import { Item } from './components/Item/Item'; */

/* import { ContactPage } from './components/ContactPage/ContactPage'; */
/* import { Navbar } from './components/Navbar/Navbar';

import { Studies} from './components/Studies/Studies'
import {Footer} from './components/Footer/Footer';
import { MyProjects } from './components/MyProjects/MyProjects';
import { AboutMe } from './components/AboutMe/AboutMe';
import { FrontPage } from './components/FrontPage/FrontPage'; */
import { Project } from './components/Project/Project';
import { BrowserRouter, Route, Routes} from  "react-router-dom";
import {Footer} from './components/Footer/Footer';
import { FrontPage } from './components/FrontPage/FrontPage';
import { AboutMe } from './components/AboutMe/AboutMe';



function App() {
  return (
    <div >
      <BrowserRouter >
        <div >
        <Routes >
          <Route path='/' element={<FrontPage />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/projects' element={<Project />}/>
          
        </Routes>
        <div>
          {/* <AboutMe /> */}
          <Footer />
        </div>
        </div>
        
        
        
       
        
        
      </BrowserRouter>
     {/*  <div>
        <FrontPage />
      </div>
      <div>
      <AboutMe />
    </div>
      <div>
        <Studies /> 
      </div>
      <div>
        <MyProjects />
      </div>
      <div>
        <Footer />
      </div> */}
    {/*  <div>
      <Project />
     </div> */}
     {/* <div>
      <ItemDetailContainer itemId={2}/>
     </div> */}
    {/*  <div>
      <ContactPage />
     </div>
     
 */}
    {/*  <Item /> */}
    </div>
  );
}

export default App;
