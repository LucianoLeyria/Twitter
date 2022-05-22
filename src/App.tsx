import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Registerorlogin from './pages/Registerorlogin/Registerorlogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerorlogin />} />
        <Route
          path="/home"
          element={
            <>
              {!window.localStorage.getItem('token') ? (
                <Navigate to="/" />
              ) : (
                <Home />
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
