import React, { Component } from "react";

import ShowMeta from "../Shows/ShowMeta";

import "./Show.css";

class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
          show: []
        }

        this.getImageUrl = this.getImageUrl.bind(this);
    }

    getImageUrl() {
        const images = this.state.show.images;
        if( images ) {
            let poster_images = images.filter((image) => {
                return image.type.toLowerCase() === "poster";
            });
            return poster_images && poster_images.length ? poster_images[0].url : '';
        }
    }

    componentDidMount() {
        const show_id = this.props.match.params.id;
        fetch(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${show_id}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ show: data.data })
        })
        .catch(console.log)
    }

    render() {
        const show = this.state.show;
        if( show ) {
            return (
                <div className="single-show-container">
                    <div className="single-show-image">
                        <ShowMeta movie={show} />
                        <img alt={show.title} src={this.getImageUrl()} />
                    </div>
                    <div className='single-show-desription'>
                        <h1>{show.title}</h1>
                        {show.tags && <ul className='tags-list'>
                            {show.tags.map((tag) => {
                                return (
                                    <li>{tag.label}</li>
                                );
                            })}
                        </ul>}
                        <div className="single-show-detail">
                            <p>{show.description}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return 'loading..';
        }
    }
}

export default Show;