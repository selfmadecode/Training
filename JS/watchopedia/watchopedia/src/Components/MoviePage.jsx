import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
    const [movieState, addNewMovie] = useState(() => {
        return {
            movieList: ["Die hard", "Heage"]
        }
    });

    function handleAddmovie(newMovie) {
        addNewMovie((prevState) => {
            return { ...prevState, movieList: prevState.movieList.concat([newMovie]) }
        })

    }


    return (
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie handleAddmovie={handleAddmovie} />
            <MovieList movieList={movieState.movieList} />
        </div>
    )
}

export default MoviePage;