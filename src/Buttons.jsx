import github from './images/github.png';
import linkedIn from './images/linkedIn.png';
import profile from './images/profile.png';
import { useState } from 'react';
import './App.css';

function Buttons() {
    return (
      <>
     <div className="grid-child linkBtn">
        <h4>Hello!:</h4>
        <a href="https://www.linkedin.com/in/sarah-cyphers" >
        <img src={linkedIn} width = {50} height = {50} className="logo" alt="Linkedin logo" />
      </a>
      <a href="https://github.com/sarahcyphz">
        <img src={github} width = {45} height = {45} className="logo" alt="Linkedin logo" />
      </a>
      </div>
      <div className="grid-child profilePic">
        <img src={profile} alt="Profile Pic"/>
      </div>

      </>
    );
}

export default Buttons;

