import React, {useState} from "react";
import "./style.css";

import MovieList from "./Components/MovieList";
import  MovieDisplay from "./Components/MovieDisplay";



const App=()=>{
  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log(selectedMovie);


  return (
    <div>

    {/* Display Movies Names */}
    <MovieList  updateSelectedMovies={setSelectedMovie}/>

      {/* Display Movie Details */}

    <MovieDisplay clickedMovie={selectedMovie}/>
     
    </div>
  );
}

export default App;
