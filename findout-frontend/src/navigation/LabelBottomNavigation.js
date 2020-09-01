import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({

    stickToBottom: {

        position: 'fixed',
        bottom: 0,
        height:80,
        width: '100%',

    },


});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <footer>
        <div className={classes.stickToBottom}>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="New Voting" value="recents" icon={<AddCircleOutlineIcon/>}/>
                <BottomNavigationAction label="All Votings" value="favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            </BottomNavigation>
        </div>
        </footer>
    );
}