import './App.css';
import { useState } from 'react';
//import ProgressBar  from './Pages/Home/ProgressBar/ProgressBar';
//import  TestComp  from './Components/testComp/TestComp.jsx';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Lectures from './Components/Lectures';
import Codes from './Components/Codes';
import CourseInfo from './Components/CourseInfo';
import TAOfficeHours from './Components/TAOfficeHours';
import Resources from './Components/Resources';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      
      <Router>
        <NavBar />
        <Switch>  
          <Route exact path='/'><Home /></Route>
          <Route path='/lectures'><Lectures /></Route>
          <Route path="/codes"><Codes /></Route>
          <Route path="/courseinfo"><CourseInfo /></Route>
          <Route path="/taofficehours"><TAOfficeHours /></Route>
          <Route path="/resources"><Resources /></Route>

        </Switch>

      </Router>

    </div>

  );
}


/*
DAY 2: Attempt at routing Home and Lectures pages
<Route path='/' element={<Home />} />
        <Route path='/lectures' element={<Lectures />} />


------------------------------------------------------------
DAY 1: Making a real-time progress bar
------------------------------------------------------------
export default function App() {


  return (
    <div className='main'>
      <h1>hello this is the main page</h1>


      <TestComp />
      <ProgressBar />


    </div>

  );
}





<div className="App">
        <h1>Hello World! first app </h1>
      </div>

*/