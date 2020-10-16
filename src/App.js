import React, { useState, useEffect } from "react";
import axios from 'axios';

import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import BasicD3 from './Component/BasicD3'



function App() {

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/budget',
      );
 
      setData(result.data.myBudget);
    };
 
    fetchData();
  }, []);
 
  return (
    <Router >
      <Menu/>
      <Hero/>
      <div className="mainContainer"></div>
      <Switch>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
      <div>
      <span className="label">Hooks</span>
        <BasicD3
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
