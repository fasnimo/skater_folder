import React from 'react';
import {Route, Switch} from "react-router-dom"
import SkateContainer from "./SkateContainer"
import About from "./About"
import FrequentAsk from "./FrequentAsk"

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={SkateContainer} />
                <Route exact path="/about" component={About}/>
                <Route exact path='/faq' component={FrequentAsk} />
            </Switch>
        </div>
    );
};

export default Router;