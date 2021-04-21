export const SET_LOADING = 'SET_LOADING'
export const SET_STORIES = 'SET_STORIES'
export const REMOVE_STORY = 'REMOVE_STORY'
export const HANDLE_PAGE = 'HANDLE_PAGE'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'
export const GET_SINGLE_STORY_BEGIN = 'GET_SINGLE_STORY_BEGIN'
export const GET_SINGLE_STORY_SUCCESS = 'GET_SINGLE_STORY_SUCCESS'
export const GET_SINGLE_STORY_ERROR = 'GET_SINGLE_STORY_ERROR'
export const GET_SINGLE_STORY_CHARS = 'GET_SINGLE_STORY_CHARS'
export const LOAD_STORIES = 'LOAD_STORIES'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const FILTER_STORIES = 'FILTER_STORIES'


export const setLoadingAction = () => {
  return { type: SET_LOADING }
}

export const setStoriesAction = (data) => {
  const { hits, nbPages, nextPage, prevPage } = data;
  return {
    type: SET_STORIES,
    payload: {
      hits: hits,
      nbPages: nbPages,
      nextPage: nextPage,
      prevPage: prevPage,
    }
  }
}

export const removeStoryAction = (id) => {
  return {
    type: REMOVE_STORY,
    payload: { id: id }
  }
}

export const handlePageAction = (value) => {
  return {
    type: HANDLE_PAGE,
    payload: value
  }
}


export const handleSearchAction = (query, page) => {
  return {
    type: HANDLE_SEARCH,
    payload: {
      query: query,
      page: page
    }
  }
}

export const loadStoriesAction = (strories) => {
  return {
    type: LOAD_STORIES,
    payload: strories
  }
}

export const filterStoriesAction = () => {
  return { type: FILTER_STORIES }
}


export const updateFiltersAction = ({ name, value }) => {
  return {
    type: UPDATE_FILTERS,
    payload: { name, value }
  }
}

export const GetSingleStoryBeginAct = () => {
  return (
    { type: GET_SINGLE_STORY_BEGIN }
  )
}

export const GetSingleStorySuccessAct = (story) => {
  return {
    type: GET_SINGLE_STORY_SUCCESS,
    payload: story
  }
}

export const GetSingleStoryErrorAct = () => {
  return (
    { type: GET_SINGLE_STORY_ERROR }
  )
}


export const GetSingleStoryCharsAct = (value) => {
  return {
    type: GET_SINGLE_STORY_CHARS,
    payload: value
  }
}

