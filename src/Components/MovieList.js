import React,{useState} from "react";
import moviesData from "../data/moviesData";
// import MovieDisplay from "./MovieDisplay";

const MovieList = ({updateSelectedMovies}) => {
   

     return (
        <div>
        <div className="movie-list">
        {
         moviesData.map((item)=>(
            <p onClick={()=>updateSelectedMovies(item)}>{item.title}</p>    
         ))
        }

       
        </div>
            {/* Display Movie Details */}
        {/* <MovieDisplay clickedMovie={selectedMovie}/> */}
     </div>
     )
}

export default MovieList;