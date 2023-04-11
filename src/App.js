import Login from './Components/Login/Login';
import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, Router, useRoutes } from 'react-router-dom';
import Routes from './Route/PrivateRoute';
import Home from './Components/Home/Home';
import list_routes from './Route/list_routes';
import PrivateRoute from './Route/PrivateRoute';
function App() {
  const content = useRoutes(list_routes);
  return (

    <div className='App'>
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
