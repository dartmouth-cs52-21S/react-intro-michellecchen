import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import YouTube from './youtube';

const About = (props) => {
    return <div>This is a website where you can browse YouTube through the power of React.</div>;
};

const Welcome = (props) => {
    return <div>Welcome! Enjoy your stay.</div>;
};

const Test = (props) => {
    return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
    return <div>URL not found. Please enter a proper URL.</div>;
};

const App = (props) => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route exact path="/test/:id" component={Test} />
                    <Route exact path="/youtube" component={YouTube} />
                    <Route component={FallBack} />
                </Switch>
            </div>
        </Router>
    );
};

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/test/id1">Test #1</NavLink></li>
                <li><NavLink to="/test/id2">Test #2</NavLink></li>
                <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
            </ul>
        </nav>
    );
};

export default App;
