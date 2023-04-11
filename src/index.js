import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store/Store';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PrivateRoute from './Route/PrivateRoute';
import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* {content} */}
      <Routes>

        <Route path='/' element={
          <PrivateRoute>
            <Navigate to='/home' />
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
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
