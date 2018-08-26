import React, { Component } from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
        const { data } = props;
        return (
            <div style={{display: 'flex',flexWrap:'wrap',maxWidth:"75%",justifyContent:"space-around"}}>
                {data.map(movie => {
                    return (
                        <MovieItem key={movie.id}
                                   src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                   title={movie.title}
                                   vote_average={movie.vote_average}
                                   description={movie.overview}
                                   rating={movie.vote_average}
                                   id={movie.id}
                                   onMovieAdd={() => props.onHandleAdd(movie.id)}
                        />
                    )
                })}
            </div>
        )

}
export default MovieList;