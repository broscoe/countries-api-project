import { Card } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';

export default function CountryDetails({countries}) {
    let { individualCountry } = useParams();
    console.log(individualCountry)

    return (

        <countryCard />

    )
}
