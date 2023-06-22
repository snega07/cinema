import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/cinema' exact element={<SplashScreen maxrange={6} />}></Route>
          <Route path='/login' exact element={<Login />}></Route>
          <Route path='/profile' exact element={<Profile/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
