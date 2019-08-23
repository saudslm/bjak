import React, { Component } from "react";
import ShowRow from './ShowRow';


class Shows extends Component {
    constructor(props) {
        super(props)

        this.state = {
          shows: []
        }
    }

    componentDidMount() {
        fetch('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20')
        .then(res => res.json())
        .then((data) => {
          this.setState({ shows: data.data })
        })
        .catch(console.log)
    }

    render() {
        const shows = this.state.shows.map((show) => {
            if( show.type === 'Multi-Title-Manual-Curation' ) {
                return <ShowRow show={show}></ShowRow>;
            } else {
                return '';
            }
        });

        return (
            <div>
                {shows}
            </div>
        );
    }
}

export default Shows;