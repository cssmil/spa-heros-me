import React from 'react'
import { useParams } from 'react-router-dom';
import { heros } from '../assets/heros';

export const Hero = () => {
  let { id } = useParams();

  const heroData = heros.find( hero => hero.id === id) 

  return (
    <>
      <div className='hero-data'>
        <img src={`/src/assets/heroes/${heroData.id}.jpg`} alt="" />
        <div>
          <h3>{heroData.superhero}</h3> 
          <hr />
          <p>{heroData.superhero}</p>
          <p>{heroData.alter_ego}</p>
          <p>{heroData.characters}</p>
        </div>
      </div>
    </>

  )
}
