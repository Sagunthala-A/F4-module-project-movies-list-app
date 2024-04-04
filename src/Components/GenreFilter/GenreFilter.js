import React from 'react';
import './GenreFilter.css'

const GenreFilter = ({genres,setClickedGenre}) => {
    function handleGenreSelection(selectedGenre) {
        console.log(`Filtering by ${selectedGenre}`);
        setClickedGenre(selectedGenre);
    }
  return (
    <div className='genreFilter'>
      <h2>Filter by Genre</h2>
      <div className='genreFilter__buttonList'>
        {
          <>
          <button onClick={()=>{setClickedGenre(null)}}>All Genre</button>
          {
        genres.map((val,ind)=>(
            <div key={ind}>
                <button onClick={()=>{handleGenreSelection(val)}}>{val}</button>
            </div>
        ))
    }
        </>
      }
      </div>

    </div>
  )
}

export default GenreFilter
