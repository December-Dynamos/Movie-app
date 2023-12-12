import React from "react";

const MovieDisplay = ({clickedMovie}) => {
    
  
     return(
        <div className="movie-display">
          {
              clickedMovie!=null && (
                <div>
                  <h1>{clickedMovie.title}</h1>
                  <p>{clickedMovie.actor}</p>
                  <p>{clickedMovie.genre}</p>
                  <p>{clickedMovie.director}</p>
                </div>
              )
          }
      </div>
     )
}

export default MovieDisplay;