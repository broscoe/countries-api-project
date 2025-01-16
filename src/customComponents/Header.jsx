import { ColorModeButton } from "../components/ui/color-mode";
import { Icon } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to="/">
                <h1>where in the world?</h1>
            </Link>
            <Link to="/SavedCountries">
                <button>
                    <Icon fontSize="2xl" color="pink.700">
                        <HiHeart />
                    </Icon>
                saved courntries
                </button>
            </Link>
            <ColorModeButton />
        </>
    )
}