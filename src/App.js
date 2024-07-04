import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Restaurant from './pages/restaurant/Restaurant';
import FoodOrder from './pages/foodOrder/FoodOrder';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/restaurant/:id' element={<Restaurant/>}/>
                    <Route path='/foodOrder/:id' element={<FoodOrder/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
//theme color - #00665c
export default App;