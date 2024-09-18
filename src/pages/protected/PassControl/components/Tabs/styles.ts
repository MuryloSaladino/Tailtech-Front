import { Box, styled } from "@mui/material";

export const StyledNav = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 10px rgba(0,0,0,.6)",
}))