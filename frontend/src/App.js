import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Plan from './components/pages/Plan';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/home*' element={<Home />} exact />
        <Route path='/login*' element={<Login  />} exact />
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/plan' element={<Plan />} exact />
        <Route path='/profile' element={<Profile />} exact />
      </Routes>
    </div>
  );
}

export default App;
