import { Card, For, Stack, Input, Button } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Field } from "../components/ui/field"
import { NativeSelectField, NativeSelectRoot } from "../components/ui/native-select"
import CountryCard from "../customComponents/CountryCard"

export default function Home({countries}) {
    
    const FormComponent = () => (
        <FormControl>
          <FormLabel htmlFor="search">Search</FormLabel>
          <Field id="search" name="search" placeholder="Search countries" />
          <FormLabel htmlFor="country">Country</FormLabel>
          <NativeSelectRoot>
            <NativeSelectField id="country" name="country">
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
            </NativeSelectField>
          </NativeSelectRoot>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input id="city" name="city" placeholder="Enter city" />
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </FormControl>
      );
      
    return <>
        
        {/* push name from obj saved to array to populate saved countries */}
        <FormComponent />

        <Stack gap="4" direction="row" wrap="wrap">
            <For each={countries} >
                {(country, index) => (
                    <CountryCard country={country}/>
                )}
            </For>
        </Stack>
    </>
}