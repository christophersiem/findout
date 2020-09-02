import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Header from "./components/Header";
import LabelBottomNavigation from "./navigation/LabelBottomNavigation";
import AddVoting from "./pages/AddVoting";

export default function Navigation() {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/add">
            <AddVoting/>
                    </Route>
                </Switch>
            </Router>
            <LabelBottomNavigation/>

        </>

    )
}