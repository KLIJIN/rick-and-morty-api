
import React
  // , { useContext } 
  from 'react'
import { useFilterContext } from '../state/context/filter_context'
import { Link } from 'react-router-dom'


const Stories = () => {
  // console.log("Stories")
  const { filtered_stories: stories } = useFilterContext();

  if (stories?.length < 1) {
    return <div className="loading"> </div>
  }

  return (
    <section className="section"  >
      {stories.map((item) => {
        const { id, name, air_date, episode } = item;
        const date = new Date(air_date);
        let day = date.getDate();
        day = day < 10 ? (day = `0${day}`) : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? (month = `0${month}`) : month;
        let year = date.getFullYear();
        return (
          <div key={id}>
            <h3> {name} </h3>
            <div> Сезон: {+`${episode.slice(1, 3)}`} </div>
            <div> Серия: {+`${episode.slice(4, 6)}`} </div>
            <div> Премьера: {`${day}.${month}.${year}`} </div>
            <Link to={`/episodes/${id}`} className="link"> read more </Link>
          </div>
        );
      })}
    </section>
  )
}

export default Stories









