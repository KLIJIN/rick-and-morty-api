import React, { useEffect, useContext, useReducer } from 'react'
import {
  loadStoriesAction,
  updateFiltersAction, //обновляем Filter Provider filters: text
  filterStoriesAction,
  // clearFiltersAction,
  GetSingleStoryBeginAct, GetSingleStorySuccessAct, GetSingleStoryErrorAct, GetSingleStoryCharsAct
} from '../actions'

import reducer from '../reducers/filter_reducer'
import { useEpisodesContext } from './episodes_context'


const getLocalStorage = () => {
  let cart = localStorage.getItem("text");
  if (cart) {
    return JSON.parse(localStorage.getItem("text"))
  } else {
    return ""
  }
}


const initialState = {
  filtered_stories: [],
  all_stories: [],
  filters: {
    text: getLocalStorage(),
  },
  single_story_loading: false,
  single_story_error: false,
  single_story: {}
}


const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {

  const { hits } = useEpisodesContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(state.filters.text));
    dispatch(loadStoriesAction(hits)); //при загрузке контекста импортируем в редьюсере массив hits из EpisodesContext в массив filtered_stories
  }, [hits, state.filters.text])

  useEffect(() => {
    dispatch(filterStoriesAction());  //FILTER_STORIES
  }, [hits, state.filters])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    dispatch(updateFiltersAction({ name, value })); //UPDATE_FILTERS
  }
  // const clearFilters = () => {
  //   dispatch(clearFiltersAction()); //CLEAR_FILTERS
  // }

  const fetchSingleStory = async (url) => { //загружает отдельный эпизод
    dispatch(GetSingleStoryBeginAct())
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log("EpisodesProvider SINGLE STORY-->", data);
      dispatch(GetSingleStorySuccessAct(data))
      const chars = await Promise.all(data.characters.map(item => fetchChar(item)))
      console.log("EpisodesProvider SINGLE STORY-->", chars);
      dispatch(GetSingleStoryCharsAct(chars));
    } catch (error) {
      dispatch(GetSingleStoryErrorAct())
    }
  }

  const fetchChar = async (url) => {  //загружаем список персонажей из отдельного эпизода
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, fetchSingleStory, fetchChar }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext);
}