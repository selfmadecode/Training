import { useState } from "react";

const AddMovie = (props) => {
    const [movieName, setMovieName] = useState("");

    function submiteAddMovieForm(e, props) {
        e.preventDefault();
        props.handleAddmovie(movieName);
        setMovieName("");
    }

    return (
        <form onSubmit={(e) => submiteAddMovieForm(e, props)}>
            <div className="row text-white">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie </div>
                <div className="col-8 offset-1">
                    <input type="text" placeholder="Movie Name..." className="form-control" value={movieName} onChange={(e) => setMovieName(e.target.value)}></input>
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control"> Add</button>
                </div>
                <hr className="mt-3" />

            </div>

        </form>
    )
}

export default AddMovie;