import React from 'react'
import { useEpisodesContext } from '../state/context/episodes_context'

const Buttons = () => {
  // console.log("Buttons");
  const { isLoading, page, nbPages, handlePage } = useEpisodesContext() //достаем из контекста часть initialState

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}> Назад </button>
      <p> {page} of {nbPages} </p>
      <button disabled={isLoading} onClick={handlePage.bind(this, 'inc')}> Далее </button>
    </div>
  )
}

export default Buttons
