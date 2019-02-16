import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

require('typeface-titillium-web');

class ListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:2048/page1').then((list) => {
            this.setState({ movies: list.data.page["content-items"].content })

            // lazy loading once page one loaded load page 2
            axios.get('http://localhost:2048/page2').then((list) => {
                let movies = [...this.state.movies, ...list.data.page["content-items"].content]
                this.setState({ movies: movies })

                axios.get('http://localhost:2048/page3').then((list) => {
                    let movies = [...this.state.movies, ...list.data.page["content-items"].content]
                    this.setState({ movies: movies })

                    this.allmovies = movies;
                })
            })
        })
    }

    getMoviesList(searchText) {
        let list = [];
        let s = searchText
        for (let i = 0; i < this.allmovies.length; i++) {
            let movie = this.allmovies[i];
            if (movie.name.toUpperCase().startsWith(s[0].searchText.toUpperCase())) {
                list.push(movie)
            }

            this.setState({ movies: list })
        }
    }

    componentWillReceiveProps(props) {
        this.getMoviesList(props.searchText);
    }
    render() {
        return (
            <div className='listing '>
                {this.state.movies.map((item, i) =>

                    <div key={i} className={i % 3 === 1 ? "inlineee marginn1" : "inlineee"}>
                        <div className="w-full relative cursor-pointer rounded overflow-hidden">
                            <div className='marBottom'>
                                <img className="w-full" src={require('../Slices/' + item["poster-image"])} />
                            </div>
                            <div className="paTop">{item.name}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => ({
    searchText: state.todos
})



const mapDispatchToProps = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)