import React from 'react'
// import { useGlobalContext } from '../state/context/episodes_context'
import { useFilterContext } from '../state/context/filter_context'

const SearchForm = () => {
  // console.log("SearchForm")
  const { filters: { text }, updateFilters } = useFilterContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}     >
      {/* <h2>search story</h2> */}
      <input
        type='text'
        name="text"
        className='form-input'
        placeholder="search story"
        value={text}
        onChange={updateFilters}   // меняем стейт FilterProvider - filteres.text
      />
    </form>
  )
}

export default SearchForm


