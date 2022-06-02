import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Views/Home/Home';
import Login from './components/Views/Login/Login';
import Register from './components/Views/Register/Register';
import Registerorlogin from './components/Views/Registerorlogin/Registerorlogin';
import Favorites from './components/Views/Favorites/Favorites';
import Profile from './components/Views/Profile/Profile';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registerorlogin' element={<Registerorlogin />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
