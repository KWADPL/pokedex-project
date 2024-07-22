import React from "react";
import {useState, useEffect} from "react";

function Search(){
    const [input, setInput] = useState("");
    const [pokemon, setPokemons] = useState({name: "pikachu",
        height: 4,
        weight: 60,
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
      });

      const fetchPokemon = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setPokemons(data));
    };

    return(
        <div className="search">
            <h2>Search for a Pokemon</h2>
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="search-box">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={fetchPokemon}>Search</button>
            </div>
            
        </div>
    )
}
export default Search;