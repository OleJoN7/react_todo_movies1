import React, { Component } from 'react';

function MovieListWillWatch(props) {
    return (
        <div style={{maxWidth:"25%",fontSize:"25px"}}>
            <p>Will watch: {props.moviesWillWatch.length}</p>
            <ul className="list-group">
                {props.moviesWillWatch.map(movie => {
                    return (
                        <li id={movie.id}
                            key={movie.id}
                            className="list-group-item">
                            {movie.title} {movie.vote_average}</li>
                    )
                })}

            </ul>
        </div>
    )
}
export default MovieListWillWatch;