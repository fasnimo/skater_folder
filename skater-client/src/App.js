import React from 'react';
import {Route, Switch} from "react-router-dom"
import SkateContainer from "./components/SkateContainer"
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import About from "./components/About"
import FrequentAsk from "./components/FrequentAsk"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
    <Switch>
      <Route exact path='/' component={SkateContainer} />
      <Route exact path="/about" component={About}/>
      <Route exact path='/reviews/new' component={ReviewForm} />
      <Route exact path='/reviews' component={ReviewList} />
      <Route exact path='/faq' component={FrequentAsk} />
    </Switch>
    </>
   
  );
}

export default App;
