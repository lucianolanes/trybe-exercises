import React from 'react';
import Data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        {
          Data.map((eachPokemon) => <Pokemon key={eachPokemon.name} poke={eachPokemon}/>)
        }
      </section>
    )
  }
}

export default Pokedex;
