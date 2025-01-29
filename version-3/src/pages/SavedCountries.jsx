import { useState, useEffect } from 'react';

export default function savedCountries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    bio: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataObj = formData;
    console.log(dataObj);
    console.log(JSON.stringify(formData))
    //send dataObj to backend
    // try {
    //   localStorage.setItem("profile", JSON.stringify(dataObj));
    // }
    //   catch (error) {
    //     console.log(error);
    //   }
      
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: dataObj.name,
      email: dataObj.email,
      country: dataObj.country,
      bio: dataObj.bio,
    });
    setFormData({ name: '', email: '', country: '', bio: '' }); // Reset the form
  };

  useEffect(() => {
   let profileInfo = JSON.parse(localStorage.getItem("profile"))
   console.log(profileInfo.name)
  }, [])

  return (
    <>


      <form onSubmit = {handleSubmit}>
        <label htmlFor = "name"> </label>
        <input
          placeholder = "Name"
          type = "text"
          name = "name"
          id = "name"
          value = {formData.name}
          onChange = {handleChange}
        />
        <label htmlFor = "email"></label>
        <input
          placeholder = "Email"
          type = "email"
          name = "email"
          id = "email"
          value = {formData.email}
          onChange = {handleChange}
        />
        <label htmlFor = "country"></label>
        <input
          placeholder = "Country"
          type= "country"
          name =" country"
          id = "country"
          value = {formData.country}
          onChange = {handleChange}
        />
        <label htmlFor="bio">

          <textarea value = {formData.bio} onChange= {handleChange} placeholder="Bio" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}