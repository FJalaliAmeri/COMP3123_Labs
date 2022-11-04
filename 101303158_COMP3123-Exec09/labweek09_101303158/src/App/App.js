import logo from '../logo.svg';
import React, { Fragment } from 'react';
import './App.css';
import Student from '../Student/Student';

let student = {
  sid: 101303158,
  fnm: 'Farshad',
  lnm: 'Jalali Ameri'
}
function App() {
  return (
    <Fragment className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Welcome to Fullstack Development - I
        </h1>
        <h2>
          React JS Programming Week 09 Lab Exercise
        </h2>
        <Student student = {student}/>
      </header>
      
    </Fragment>
    
  );
}

export default App;
