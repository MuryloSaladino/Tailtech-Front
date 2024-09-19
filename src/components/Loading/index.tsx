import { styled } from "@mui/material";
import { Box } from "@mui/system";
import PageEnveloper from "../PageEnveloper";

interface ILoadingIconProps {
    centered?: boolean;
}

export const LoadingIcon = styled(Box)<ILoadingIconProps>(({ theme, centered }) => ({
    aspectRatio: "1/1",
    width: 50,
    borderRadius: "50%",
    border: "5px solid " + theme.palette.primary.main,
    animation: "loading-shape 0.8s infinite linear alternate, loading-rotation 1.6s infinite linear",
    position: centered ? "fixed" : "static",
    top: "50%",
    left: "50%",
    transform: centered ? "translate(-50%, -50%)" : " ",
}))

export const LoadingPage = () => (
    <PageEnveloper noHeader>
        <LoadingIcon centered/>
    </PageEnveloper>
)