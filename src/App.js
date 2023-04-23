import Login from './Components/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Route/PrivateRoute';
import { useContext } from 'react';
import { ThemeContext } from './Theme';
function App() {

  const { theme } = useContext(ThemeContext);

  return (

    <div className={`App ${theme}`}>
      <BrowserRouter>
        {/* {content} */}
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
