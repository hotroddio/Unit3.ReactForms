import { useState } from "react";

export default function Authenticate({ token }) {
const [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    console.log("hello");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: { "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
          },
        }      
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      console.log("FIRED ***", handleClick);
      console.log(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return <>
          <h2>Authenticate!</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={handleClick}>Authenticate Token</button>
          </>
}
