import React from "react";
import {useState, useEffect} from "react";


function Pokedex() {
    const [pokemons, setPokemons] = useState([
      { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "Ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ]);

    const fetchPokemon = async () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => setPokemons(data.results))
      };
      
      useEffect(() => {
        fetchPokemon()
      }, []);
  
      return (
        <div className="pokedex">
          <h2>All Pokemon</h2>
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.name}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.match(/\/(\d+)\//)[1]
                  }.png`}
                  alt={pokemon.name}
                />
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default Pokedex;