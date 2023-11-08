import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from '../auth/components/Notfound';
import Product2 from '../product/Product2';
import Product3 from '../product/Product3';
import Menu from '../product/Menu';
import Home from '../home/Home';
import NavBar from '../../shared/NavBar';


function App() {
return (
    <>
    <BrowserRouter basename="/">
        <NavBar>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product2" element={<Product2/>} />
                <Route path="/product3" element={<Product3/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>
        </NavBar>
    </BrowserRouter>
    </>
);
}

export default App;
