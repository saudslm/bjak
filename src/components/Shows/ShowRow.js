import React from "react";
import Slider from "react-slick";

import ShowMeta from "./ShowMeta";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowRow.css";

const ShowRow = ({ show }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1
                }
            },
        ]
    };

    return (
        <div key={show.row_id} className="show-row">
            <h1 className="row-name">{show.row_name}</h1>
            <Slider {...settings}>
                {show.data.map((movie) => (
                    <div className="show-box" key={movie.id}>
                        <a href={'/shows/' + movie.id}>{movie.title}</a>
                        <img alt={movie.title} src={getImageUrl(movie.images)} />
                        <h2 className="movie-title">{movie.title}</h2>
                        <ShowMeta movie={movie} />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

const getImageUrl = (images) => {
    let poster_images = images.filter((image) => {
        return image.type.toLowerCase() === "poster";
    });
    return poster_images && poster_images.length ? poster_images[0].url : '';
};

export default ShowRow;