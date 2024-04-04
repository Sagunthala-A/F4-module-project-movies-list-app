import React from 'react';
import './GenreFilter.css'

const GenreFilter = ({genres}) => {
    function handleGenreSelection(selectedGenre) {
        console.log(`Filtering by ${selectedGenre}`)
    }
  return (
    <div className='genreFilter'>
      <h2>Filter by Genre</h2>
      <div className='genreFilter__buttonList'>
        {
        genres.map((val,ind)=>(
            <div key={ind}>
                <button onClick={()=>{handleGenreSelection(val)}}>{val}</button>
            </div>
        ))
      }
      </div>

    </div>
  )
}

export default GenreFilter
