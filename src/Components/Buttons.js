import React from 'react'
import { useEpisodesContext } from '../state/context/episodes_context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useEpisodesContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}> Prev </button>
      <p> {page} of {nbPages} </p>
      <button disabled={isLoading} onClick={handlePage.bind(this, 'inc')}> Next </button>
    </div>
  )
}

export default Buttons
