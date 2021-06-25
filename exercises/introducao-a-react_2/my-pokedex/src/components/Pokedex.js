import React from 'react';
import Data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        {
          Data.map((pokemon) => <Pokemon poke={pokemon}/>)
        }
      </section>
    )
  }
  Pokedex
}

export default Pokedex;
