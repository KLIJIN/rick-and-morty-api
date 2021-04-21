
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFilterContext } from '../state/context/filter_context'

function SingleEpisodePage() {
  const url = 'https://rickandmortyapi.com/api/episode/'
  const { id } = useParams()

  const { single_story_loading: loading, single_story: story, fetchSingleStory } = useFilterContext() //достаем из контекста часть initialState
  const { air_date, episode, name, chars } = story


  useEffect(() => {
    fetchSingleStory(`${url}${id}`)
  }, [id])


  if (loading) {
    return <div className="loading"> </div>
  }

  const date = new Date(air_date);
  let day = date.getDate();
  day = day < 10 ? (day = `0${day}`) : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? (month = `0${month}`) : month;
  let year = date.getFullYear();

  return (
    <section className="section ">
      <div className="single_story">
        <h3>   {name} </h3>
        <div> Сезон: {+`${episode?.slice(1, 3)}`} </div>
        <div> Серия: {+`${episode?.slice(4, 6)}`} </div>
        <div> Премьера: {`${day}.${month}.${year}`} </div>
      </div>
      <div className="single_story"> <h3> characters: </h3> </div>

      <div className="container"  >
        {
          chars?.map((item) => {
            const { id: idd, name, status, species, gender, image, origin, location } = item;
            return (
              <div className="CharacterCard" key={idd} >
                <div className="CharacterCard__image" style={{ backgroundImage: `url(${image})` }}> </div>
                <div className="CharacterCard__description">
                  <div> Name: {name} </div>
                  <div> Gender: {gender} </div>
                  <div> Species: {species}</div>
                  <div> Status: {status}</div>
                  <div  > Origin: {origin.name}</div>
                  <div> Location: {location.name}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  )



}

export default SingleEpisodePage