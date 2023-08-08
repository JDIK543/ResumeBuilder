import React, { } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomeScreen from './screens/home.js';
import EducationScreen from './screens/education.js';
import ExperienceScreen from './screens/experience.js';
import DesignScreen from './screens/design.js';
import PersonalScreen from './screens/personal.js';
import ResultScreen from './screens/result.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/education' element={<EducationScreen />} />
          <Route path='/experience' element={<ExperienceScreen />} />
          <Route path='/design' element={<DesignScreen />} />
          <Route path='/personal' element={<PersonalScreen />} />
          <Route path='/result' element={<ResultScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
