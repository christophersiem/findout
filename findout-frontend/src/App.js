import React from 'react';
import './App.css';
import LabelBottomNavigation from "./navigation/LabelBottomNavigation";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">

                <Header/>

                    <MainContent/>


                    <LabelBottomNavigation/>


        </div>
    )

}

export default App;
