import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PersonalInfo from './Components/PersonalInfo';
import Skills from './Components/Skills';
import WorkHistory from './Components/WorkHistory';
import Navigation from './Components/Navigation';

const App = () => {
  return (
    <div className="main-body">
      <Navigation />
      <div className="row justify-content-center">
        <div className="resume-information  col-8 mt-5">
          <PersonalInfo />
          <Skills />
          <WorkHistory />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
