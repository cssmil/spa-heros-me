import React, { useState } from 'react'
import { Results } from '../Components/Results'


export const Search = () => {

  const [val, setVal] = useState("")
  const handleSearcher = (event) => {
    setVal(event.target.value)
  }

  return (
    <>
      <hr />
      <form action="">
        <input 
          type='text'
          placeholder='Buscar...'
          onChange={handleSearcher}
          name='Searcher'
          value={val}
        />
      </form>

      <Results serch={val}/>

    </>
  )
}
