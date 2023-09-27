import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Home from './component/page/home';
import SignIn from './component/page/signIn';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  root
);