import React from 'react';
import './App.css';
import Home from  './Components/Home';
import ajax2 from  './Components/ajax2';
import Header from  './Components/Header';
import Footer from  './Components/Footer';
import ajax from  './Components/ajax';
import myinfo from  './Components/myinfo';
import Nav from  './Components/Nav';
import registration from './Components/registration';
import slideshow from './Components/slideshow';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';



    


function App(){
 
  return(
 
    <Router>
    <div className="App">
    <Header></Header>
      <Nav/>
      
      <Switch>
        
      <Route path="/"  exact component={Home}/>
      <Route path="/Header" component={Header}/>
      <Route path="/Footer" component={Footer}/>
      <Route path="/ajax2" component={ajax2}/>
      <Route path="/ajax" component={ajax}/>
      <Route path="/registration" component={registration}/>
      <Route path="/slideshow" component={slideshow}/>
      <Route path="/myinfo" component={myinfo}/>
      </Switch>
      <Footer></Footer>
      
    
    </div>
    </Router>
  )};
  




export default App;
