import React from "react";
import Button from './Button'

function MovieItem(props) {
    const {title, src, vote_average: rating} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={src} alt="Card image cap"/>
            <div className="card-body" style={{overflow:"hidden"}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{float:"left"}}>Rating: {rating}</p>
                <Button type="button"
                        className="btn btn-secondary"
                        onClick={props.onMovieAdd}>
                    Will Watch</Button>
            </div>
        </div>
    )

}

export default MovieItem;
