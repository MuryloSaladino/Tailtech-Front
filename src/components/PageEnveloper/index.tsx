import { ReactNode } from "react";
import Header from "../Header";
import { StyledMain } from "./styles";
import { Container } from "@mui/material";

interface IPageEnveloperProps {
    children?: ReactNode;
    noHeader?: boolean;
}

export default function PageEnveloper({ children, noHeader }: IPageEnveloperProps) {
    return(
        <>
            { !noHeader && <Header/> }

            <StyledMain>
                <Container maxWidth="xl">
                    { children }
                </Container>
            </StyledMain>
        </>
    )
}