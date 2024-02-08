import React from 'react'
import { heros } from '../assets/heros'
import { Link } from 'react-router-dom';

const resulTwo = heros.map(names => ({
  id: names.id,
  superhero: names.superhero 
}))

export const Results = ({serch = "test"}) => {

  const buscarHeroe = (palabra) => {
    return resulTwo.filter((heroe) =>
      Object.values(heroe).some((valor) =>
        valor.toLowerCase().includes(palabra.toLowerCase())
      )
    );  
  };

  const resultados = buscarHeroe(serch)
  console.log(resultados);

  return (
    <>
      <p>Palabra buscada: <b>{serch}</b></p>
      <section className='cards-hero'>
        {
          resultados.map(({id, superhero}) => (
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
    </>
  )
}
