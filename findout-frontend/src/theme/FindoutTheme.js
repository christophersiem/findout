import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({

    overrides: {
        MuiOutlinedInput: {

            root: {
                "& $notchedOutline": {
                    borderColor: "#000000"
                },
                "&:hover $notchedOutline": {
                    borderColor: "#000000"
                },
                "&$focused $notchedOutline": {
                    borderColor: "#0c2601"
                }
            }
        },
    }

})