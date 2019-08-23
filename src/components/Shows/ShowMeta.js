import React from "react";

import "./ShowMeta.css";

const ShowMeta = ({ movie }) => {
    return (
        <div className="show-meta">
            {movie.meta && movie.meta.releaseYear && <span className="show-meta--year icon-year">{movie.meta.releaseYear}</span>}
            {movie.running_time_friendly && <span className="show-meta--time icon-time">{movie.running_time_friendly}</span>}
        </div>
    );
}

export default ShowMeta;