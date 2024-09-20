import { Box, styled } from "@mui/material";

export const StyledMain = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    minHeight: "100vh",
    padding: "50px 10px"
}))