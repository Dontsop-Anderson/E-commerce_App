import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Form from './views/Form';
import Present from './views/Present';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Main /> } path='/' default/>
          <Route element={<Form /> } path='/signup' />
          <Route element={<Present /> } path='/Home' />
          <Route element={<Cart /> } path='/cart' />
        </Routes>
    </div>
  );
}

export default App;
