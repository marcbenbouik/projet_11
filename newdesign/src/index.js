import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Home from './component/page/home';
import SignIn from './component/page/signIn';
import User from './component/page/user';
import "../src/styles/reset.css"
import { Provider } from 'react-redux';
import { store } from './store'
import Header from './component/header/Header';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/user' element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  root
);