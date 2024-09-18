import { StyledNav } from "./styles";

interface ITabsProps {
    index: number;
    setIndex: (index:number) => void;
    tabs: string[];
}

export default function Tabs({  }:ITabsProps) {
    return(
        <StyledNav>

        </StyledNav>
    )
}