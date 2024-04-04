import React from 'react';
import './MovieList.css';

const MovieList = ({movies,clickedGenre}) => {
  return (
    <div className='moviesWrapper'>

    
      <table className='moviesListTable'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>
        {/* 
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
    { title: 'The Godfather', genre: 'Crime', year: 1972 },
        */}
        <tbody>
            {
                clickedGenre ? movies.filter((movie)=>(movie.genre == clickedGenre)).map((val,ind)=>(
                    <tr key={ind}>
                        <td>{val.title}</td>
                        <td>{val.genre}</td>
                        <td>{val.year}</td>
                    </tr>
                )): movies.map((val,ind)=>(
                    <tr key={ind}>
                        <td>{val.title}</td>
                        <td>{val.genre}</td>
                        <td>{val.year}</td>
                    </tr>
                ))
            }

            {/* {
                movies.map((val,ind)=>(
                    <tr key={ind}>
                        <td>{val.title}</td>
                        <td>{val.genre}</td>
                        <td>{val.year}</td>
                    </tr>
                ))
            } */}
        </tbody>
      </table>
      </div>
  )
}

export default MovieList
