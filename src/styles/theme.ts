import { createTheme } from "@mui/material";

const appTheme = createTheme({
    palette: {
        primary: {
            light: "#B6ACC5",
            main: "#827397",
            dark: "#362E41",
            contrastText: '#5F5B5B'
        },
        secondary: {
            light: "#EEEEEE",
            main: "#E9D5CA",
            dark: "#D9D9D9"
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif'
    },
    
})

export default appTheme