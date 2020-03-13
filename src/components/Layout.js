import React from "react";
import Home from "./Home";
import News from "./News";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export default function Layout() {
    return (
        <>
        <Router>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/login">Login</NavLink>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </Router>
        </>
    )
}