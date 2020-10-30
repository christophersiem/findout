import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Header from "./components/Header";
import LabelBottomNavigation from "./navigation/LabelBottomNavigation";
import AddVotingPage from "./pages/AddVotingPage";
import Home from "./pages/Home";
import FindVoting from "./pages/FindVoting";

export default function Navigation() {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/add">
                        <AddVotingPage/>
                    </Route>
                    <Route path="/find">
                        <FindVoting/>
                    </Route>
                </Switch>
            </Router>
            <LabelBottomNavigation/>

        </>

    )
}