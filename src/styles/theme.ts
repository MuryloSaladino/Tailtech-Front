import { createTheme } from "@mui/material";

const appTheme = createTheme({
    palette: {
        primary: {
            light: "#8D7296",
            main: "#827397",
            dark: "#362E41",
        },
        secondary: {
            light: "#D9D9D9",
            main: "#E9D5CA",
            dark: "#5F5B5B",
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif'
    },
    
})

export default appTheme