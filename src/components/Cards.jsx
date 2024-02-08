import React from 'react'
import { heros } from '../assets/heros'
import { Link } from 'react-router-dom'

export const Cards = ({publisher}) => {

  const cardHeros = heros.filter(hero => hero.publisher === publisher)

  return (
    <section className='cards-hero'>
        {
          cardHeros.map(({id, superhero}) => (
            <article key={id}>
              <img src={`/src/assets/heroes/${id}.jpg`} alt={superhero} />
              <div className='p-2'>
                <p>{superhero}</p>
                <Link to={`/hero/${id}`} >Ver mas ...</Link>
              </div>
            </article>
          ))
        }
      </section>
  )
}
