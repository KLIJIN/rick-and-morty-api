import React from 'react'
import { useFilterContext } from '../state/context/filter_context'

const SearchForm = () => {
  const { filters: { text }, updateFilters } = useFilterContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()} >
      <input
        type='text'
        name="text"
        className='form-input'
        placeholder="search story"
        value={text}
        onChange={updateFilters}   // update FilterProvider - filteres.text
      />
    </form>
  )
}

export default SearchForm


