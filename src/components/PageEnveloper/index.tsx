import { ReactNode, useContext } from "react";
import Header from "../Header";
import { StyledMain } from "./styles";
import { Container, ThemeProvider } from "@mui/material";
import appTheme from "../../styles/theme";
import { UserContext } from "../../providers/UserProvider";
import { LoadingPage } from "../Loading";

interface IPageEnveloperProps {
    children?: ReactNode;
    noHeader?: boolean;
}

export default function PageEnveloper({ children, noHeader }: IPageEnveloperProps) {
    
    const { loadingUser } = useContext(UserContext)
    
    return(
        <>
            {
                loadingUser ?
                <LoadingPage/> :
                <ThemeProvider theme={appTheme}>
                    { !noHeader && <Header/> }
        
                    <StyledMain>
                        <Container maxWidth="xl">
                            { children }
                        </Container>
                    </StyledMain>
                </ThemeProvider>
            }
        </>
    )
}