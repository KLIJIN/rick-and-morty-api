
import React, { useEffect } from 'react'
import {
  useParams
  // , useHistory 
} from 'react-router-dom'
//import { useEpisodesContext } from '../state/context/episodes_context'
import { useFilterContext } from '../state/context/filter_context'

function SingleEpisodePage() {
  const url = 'https://rickandmortyapi.com/api/episode/'
  const { id } = useParams()
  // const history = useHistory()

  // console.log("SingleEpisodePage", id, history);

  const { single_story_loading: loading, single_story: story, fetchSingleStory } = useFilterContext() //достаем из контекста часть initialState
  const { air_date,
    //  characters, 
    episode, name } = story

  // console.log("SingleEpisodePage", air_date, characters, episode, name);

  useEffect(() => {
    fetchSingleStory(`${url}${id}`)
  }, [id])

  // useEffect(() => {
  //   if (error) { //переадресация на главную страницу в случае ошибки
  //     setTimeout(() => {
  //       history.push('/')
  //     }, 2000)
  //   }
  // }, [error])

  if (loading) {
    return <div className="loading"> </div>
  }

  const date = new Date(air_date);
  let day = date.getDate();
  day = day < 10 ? (day = `0${day}`) : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? (month = `0${month}`) : month;
  let year = date.getFullYear();

  if (episode) {
    return (
      <section className="section"  >
        <h3> Название Эпизода: {name} </h3>
        <div> Сезон: {+`${episode.slice(1, 3)}`} </div>
        <div> Серия: {+`${episode.slice(4, 6)}`} </div>
        <div> Премьера: {`${day}.${month}.${year}`} </div>
      </section>
    )
  }

  return <section className="section">
  </section>



}

export default SingleEpisodePage