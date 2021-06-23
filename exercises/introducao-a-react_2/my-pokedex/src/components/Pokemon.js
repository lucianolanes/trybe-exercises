import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render (){
    const { name, type, averageWeight, image } = this.props.poke;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className='pokemon'>
        <ul>
        <li> Nome: {name} </li>
        <li> Tipo: {type} </li>
        <li> Peso: {value}{measurementUnit} </li>
        </ul>
        <img src = {image} alt = {name}/>
      </section>
    )
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
      })
  })
};

export default Pokemon;