import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Project } from './components/Project/Project';
import { BrowserRouter, Route, Routes} from  "react-router-dom";
import {Footer} from './components/Footer/Footer';
import { FrontPage } from './components/FrontPage/FrontPage';
import { AboutMe } from './components/AboutMe/AboutMe';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
