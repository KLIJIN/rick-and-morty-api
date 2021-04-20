import {
  SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH,

} from '../actions.js'

const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  page: 1,
  nbPages: 0
}

const reducer = (state = initialState, action) => {
  console.log(" Episodes REDUCER ->>>", action);
  switch (action.type) {
    //-------------------------------------------------------------------------------------------------------------
    case SET_LOADING:
      return { ...state, isLoading: true }
    //-------------------------------------------------------------------------------------------------------------
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
      }
    //-------------------------------------------------------------------------------------------------------------
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter(story => story.id !== action.payload.id)
      }
    //-------------------------------------------------------------------------------------------------------------
    case HANDLE_SEARCH:
      console.log("reducer", state, action)
      return {
        ...state,
        query: action.payload.query,
        page: action.payload.page
      }
    //-------------------------------------------------------------------------------------------------------------
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages) {
          nextPage = 1
        }
        return { ...state, page: nextPage }
      }
      else if (action.payload === "dec") {
        let prevPage = state.page - 1
        if (prevPage < 1) {
          prevPage = state.nbPages
        }
        return { ...state, page: prevPage }
      }
      return { ...state };
    default:
      return state;
  }
}
export default reducer
