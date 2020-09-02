import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme/FindoutTheme";

function App() {
    return (

        <ThemeProvider theme={theme}>
            <Navigation/>
        </ThemeProvider>
    )

}

export default App;
