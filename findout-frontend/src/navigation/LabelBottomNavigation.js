import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({

    stickToBottom: {
        position: 'fixed',
        bottom: 0,
        height:80,
        width: '100%',
        backgroundColor:"black"

    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();

    return (
        <footer>
        <div className={classes.stickToBottom}>
            <BottomNavigation>
                <BottomNavigationAction label="Home" value="" icon={<HomeIcon/>} onClick={()=>window.location="/"}/>
                <BottomNavigationAction label="New Voting" value="add" icon={<AddCircleOutlineIcon/>} onClick={()=>window.location="/add"}/>
            </BottomNavigation>
        </div>
        </footer>
    );
}