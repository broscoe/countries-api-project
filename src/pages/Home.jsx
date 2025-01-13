import { Card } from "@chakra-ui/react"
export default function Home() {

    
    async await fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => setError('Error: ' + error.message));
  
    return <>
    <header>
    <h1>where in the world?</h1>
    <p>saved courntries</p>
    <p>filter</p>
  </header>

 
    <form action="#">
      <input type="text" placeholder='search' />
      <select name="savedCountries" id="savedCountries">
        <option value="Angola">Angola</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Guyana">Guyana</option>
        <option value="Vietnam">Vietnam</option>
      </select>
    </form>

    <Card.Root>
      <Card.Header />
      <Card.Body />
      <Card.Footer />
    </Card.Root>
    </>
  }