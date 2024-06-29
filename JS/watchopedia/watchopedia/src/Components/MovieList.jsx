const MovieList = (props) => {
    return (
        <div className="text-white">
            {
                props.movieList.map((m, index) => {
                    return (
                        <div key={index}>
                            {m}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MovieList;