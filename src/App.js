
import './App.css';
import Navbar from './component/navbar';
import Intro from './component/intro';
import Services from './component/services';
import Work from './component/work';
import Projects from './component/projects';
import Test from './component/Test';
import Cont from './component/Contact'
import Foot from './component/Footer'
import { themeContext } from './Context';
import { useContext } from 'react'; 
import React from 'react'


export default function App(){

  
  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
    return (
      <div className="App" style={{background:darkMode? '#25262d':'',
      color:darkMode? 'white':''}}>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services color={darkMode}></Services>
      
      <Work></Work>
      <Projects color={darkMode}></Projects>
      <Test></Test>
      <Cont></Cont>
      <Foot></Foot>
      </div>
      
    )
  }


