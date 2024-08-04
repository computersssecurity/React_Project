import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Page/Home';
import {HashRouter,Route,Routes} from "react-router-dom"
import Bike from './Page/Bike';
import AccesoriesHomepage from './Page/AccesoriesHomepage';
import SignIn from './Page/Sign In';
import TestDrive from './Page/Testdrive'
import Contactus from './Page/Contactus'
import Signup from './Page/Signup'
import Parts from './Page/Parts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bike" element={<Bike/>}/>
      <Route path="/accessories" element={<AccesoriesHomepage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/testdrive" element={<TestDrive/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/parts" element={<Parts/>}/>
    </Routes>
  </HashRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
