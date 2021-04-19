import React, { useContext, useEffect, useReducer, createContext } from 'react'
import {
  setLoadingAction, setStoriesAction, removeStoryAction, handlePageAction,
  GetSingleStoryBeginAct, GetSingleStorySuccessAct, GetSingleStoryErrorAct
} from '../actions.js'
import EpisodesReducer from '../reducers/episodes_reducer'




const initialState = {
  isLoading: true,
  hits: [],
  page: 1,
  nextPage: null,
  prevPage: null,
  nbPages: 0,
  single_story_loading: false,
  single_story_error: false,
  single_story: {}
}

const EpisodesContext = createContext()

const EpisodesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(EpisodesReducer, initialState);

  const url = "https://rickandmortyapi.com/api/episode?page=";
  const currentPage = state.page;

  const fetchStories = async (url, currentPage) => {
    dispatch(setLoadingAction())
    try {
      const response = await fetch(`${url}${currentPage}`);
      const data = await response.json();
      // console.log("EpisodesProvider_fetchStories come data from API-->", data);
      dispatch(setStoriesAction({
        hits: data.results,
        nbPages: data.info.pages,
        nextPage: data.info.next,
        prevPage: data.info.prev,
      }))

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    fetchStories(url, currentPage);
  }, [state.page]);

  const removeStory = (id) => {
    dispatch(removeStoryAction(id))
  }

  const handlePage = (value) => {
    dispatch(handlePageAction(value))
  }



  //загружает отдельный эпизод
  const fetchSingleStory = async (url) => {

    dispatch(GetSingleStoryBeginAct())
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log("EpisodesProvider SINGLE STORY-->", data);
      dispatch(GetSingleStorySuccessAct(data))
      dispatch(setStoriesAction({ hits: data.results, nbPages: data.info.pages }))
    } catch (error) {
      dispatch(GetSingleStoryErrorAct())
    }
  }


  return (

    <EpisodesContext.Provider value={{ ...state, removeStory, handlePage, fetchSingleStory }}>
      {children}
    </EpisodesContext.Provider>
  )
}

// make sure use
export const useEpisodesContext = () => {
  return useContext(EpisodesContext)
}

export { EpisodesContext, EpisodesProvider }

