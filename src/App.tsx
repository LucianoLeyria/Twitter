import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Registerorlogin from './pages/Registerorlogin/Registerorlogin';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerorlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
