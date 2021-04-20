import {
  LOAD_STORIES, UPDATE_FILTERS, FILTER_STORIES, CLEAR_FILTERS,
  GET_SINGLE_STORY_BEGIN, GET_SINGLE_STORY_SUCCESS, GET_SINGLE_STORY_ERROR, GET_SINGLE_STORY_CHARS
} from '../actions'

const filter_reducer = (state, action) => {
  // debugger;
  let tempStories = []
  switch (action.type) {
    //-------------------------------------------------------------------------------------
    case LOAD_STORIES:
      return {
        ...state,
        all_stories: [...action.payload],  //редьюсер возвращает стейт, а в all_stories кладет hits из верхнего контекста
        filtered_stories: [...action.payload],
        filters: { ...state.filters }
      };
    //-------------------------------------------------------------------------------------
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    //==================FILTER_STORIES=====================================================
    case FILTER_STORIES:
      const { all_stories } = state;
      tempStories = [...all_stories];
      const { text } = state.filters
      // filtering
      tempStories = tempStories.filter((story) => story.name.toLowerCase().indexOf(text.toLowerCase()) >= 0)
      return { ...state, filtered_stories: tempStories }
    //============//=====FILTER_STORIES=====//==============================================
    case CLEAR_FILTERS:
      console.log("filter_reducer CLEAR_FILTERS")
      return {
        ...state,
        filters: { ...state.filters, text: '' }
      }
    //-------------------------------------------------------------------------------------
    case GET_SINGLE_STORY_BEGIN:
      return { ...state, single_story_loading: true, single_story_error: false, };
    case GET_SINGLE_STORY_SUCCESS:
      // debugger;
      return {
        ...state,
        single_story_loading: false,
        single_story: action.payload,
      }
    case GET_SINGLE_STORY_ERROR:
      return { ...state, single_story_loading: false, single_story_error: true, };
    //-------------------------------------------------------------------------------------
    case GET_SINGLE_STORY_CHARS:

      return {
        ...state,
        single_story: { ...state.single_story, chars: action.payload }
      }


    default:
      return state;
  }

}

export default filter_reducer