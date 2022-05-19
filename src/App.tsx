import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Views/Home/Home';
import Login from './components/Views/Login/Login';
import Register from './components/Views/Register/Register';
import Registerorlogin from './components/Views/Registerorlogin/Registerorlogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registerorlogin' element={<Registerorlogin />} />

        <Route
          path='/'
          element={
            !window.localStorage.getItem('token') ? (
              <Navigate replace to='/registerorlogin' />
            ) : (
              <Home />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
