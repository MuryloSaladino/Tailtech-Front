import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IPageTitleProps {
    children?: ReactNode;
    iconPath?: string;
}

export default function PageTitle({ children, iconPath }:IPageTitleProps) {
    return(
        <Typography fontWeight={600} variant="h2">
            { children }
            {
                iconPath && 
                <Box 
                    component="img" 
                    src={iconPath}
                    ml={5}
                />
            }
        </Typography>
    )
}