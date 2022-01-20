import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  //---------------------STATE VARIABLES--------------------------
  const [pokemon, setPokemon] = useState([])


  //useEffect function - purpose >>> after component has mounted and rendered >>> then execute anything inside this function
  useEffect( ()=> {
      // axiosPokemon();
  }, []) // never put same state variable in [] b/c useEffect will re-trigger



  //Fetch Pokemon Function
  const fetchPokemon = () => {

    // Vanilla JS Fetch - Prior ES7 syntax - Long Way
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        return res.json()
      })
      .then(jsonRes => {
        console.log(jsonRes.results);
        setPokemon(jsonRes.results);
      })
      .catch(someErr => console.log(someErr))


    //NEW ES7 syntax - Short Way
    //let response = await fetch("http://www.example.com");
  }


  // Axios Fetch Method
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    //wraps response in a .data object
    .then(res =>  {
      console.log(res.data.results)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }





  return (
    <div className="App">
      <h2>Pokemon</h2>

      <hr />

      <button onClick={fetchPokemon}>Fetch Pokemon</button> |
      
      | <button onClick={axiosPokemon}>Axios Fetch Pokemon</button>

      <hr />
      {/*JSON.stringify(pokemon)*/}

      <table>
        <thead>
          <tr>
            <th>Pokemon Name</th>
            <th>Pokemon URL</th>
          </tr>
        </thead>

        <tbody>
          {
            pokemon ?
            pokemon.map((poke, idx) => {
              return (
                <tr key={idx}>
                  <td>{poke.name}</td>
                  <td>{poke.url}</td>
                </tr>
              )
            }) : <p>loading</p>
          }  
        </tbody>
      </table>
    </div>
  );
}

export default App;