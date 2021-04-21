import {
  LOAD_STORIES, UPDATE_FILTERS, FILTER_STORIES,
  GET_SINGLE_STORY_BEGIN, GET_SINGLE_STORY_SUCCESS, GET_SINGLE_STORY_ERROR, GET_SINGLE_STORY_CHARS
} from '../actions'

const filter_reducer = (state, action) => {
  let tempStories = []
  switch (action.type) {
    //-------------------------------------------------------------------------------------
    case LOAD_STORIES:
      return {
        ...state,
        all_stories: [...action.payload],
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
    case GET_SINGLE_STORY_BEGIN:
      return { ...state, single_story_loading: true, single_story_error: false, };
    case GET_SINGLE_STORY_SUCCESS:
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