import { Card } from "@chakra-ui/react"
import { Avatar } from "../components/ui/avatar"

export default function CountryCard({country}) {
    
    return (
        <Card.Root key={country.name.official}>
                                <Card.Body gap="2">
                                    <Avatar
                                        src={country.flags.png}
                                        name={country.altSpellings[1]}
                                        size="xxlg"
                                        shape="rounded"
                                    />
                                    <Card.Title mb="2">{country.name.official}</Card.Title>
                                    <Card.Description>
                                        <p>population: {country.population}</p>
                                        <p>Region: {country.region}</p>
                                        <p>Capital: {country.capital}</p>
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
    )

}