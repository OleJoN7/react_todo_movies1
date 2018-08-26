import React, {Component} from "react";
import {moviesData} from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from './MovieListWillWatch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: moviesData,
            moviesWillWatch: [],
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddOrDelete = this.handleAddOrDelete.bind(this);
    }

    handleAdd(id) {

        let data = this.state.data;
        let dataAddFilter = data.filter(movie => {
            if (movie.id === id) {
                return movie
            }
        });

        this.setState({
            moviesWillWatch: [...this.state.moviesWillWatch, dataAddFilter[0]],
        })

    };

    handleDelete(id) {
        let moviesWillWatchDelete = this.state.moviesWillWatch;
        let moviesWillWatch = moviesWillWatchDelete.filter(movie => movie.id !== id);
        this.setState({
            moviesWillWatch,
        })
    }

    handleAddOrDelete(id) {
        let movies = this.state.moviesWillWatch;
        this.handleAdd(id);
        movies.forEach(movie => {
            if (movie.id === id) {
                this.handleDelete(id)
            }
        })

    }


    render() {

        return <div style={{display: 'flex'}}>
            <MovieList data={this.state.data}
                       onHandleAdd={this.handleAddOrDelete}/>
            <MovieListWillWatch moviesWillWatch={this.state.moviesWillWatch}/>
        </div>;
    }
}

export default App;
