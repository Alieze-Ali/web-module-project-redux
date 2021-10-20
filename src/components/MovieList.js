import React from 'react';
// Task 3b-1: also a part of connecting the method
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    // Task 3c - map movies to props so component can access list of movies
    //const movies = [];
    const { movies } = props;
    console.log(props)

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

// Task 3b-2: Replacing static movie var with that prop - I think
const mapStateToProps = state => {
    console.log(state);
    return {
        movies: state.movies                                        
    }
}

// Task 3b-1: using the connect method to map the movies state value into props
export default connect(mapStateToProps)(MovieList);