import './App.css';
import { Navbar } from './Components/NavBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shopp from './Pages/Shopp';
import ShopCategory from './Pages/ShopCategory';
import Home from './Pages/Home';
import Cartt from './Pages/Cartt';
import LoginSign from './Pages/LoginSign';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>  
        <Routes>
          <Route path='/' element={<Shopp/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Home/>}>
          <Route path=':productId' element={<Home/>}/>
          </Route>
          <Route path='/cart' element={<Cartt/>}/>
            <Route path='/login' element={<LoginSign/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}


export default App;
