import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Registerorlogin from './pages/Registerorlogin/Registerorlogin';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerorlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
