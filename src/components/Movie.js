import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Task 4b-1: import connect method from react-redux
import { connect } from 'react-redux';
// Task 4b-2: import deleteMovie action from actions folder
import { deleteMovie } from '../actions/movieActions';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    // Task 4b-3: Grabbing movies out of props
    const { movies, deleteMovie } = props;
    // const movies = [];
    const movie = movies.find(movie=>movie.id===Number(id));

    // Task 4c-1: Create event Handler to call deleteMovie on the current movie's id. Set the state, redirect the user using the push command
    const deleteMovieHandler = (e) => {
        e.preventDefault()
        deleteMovie(movie.id)
        push('/movies')
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                             {/* Task 4c-2: adding onClick to deploy the handler created above */}
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"
                            onClick = {(e) => deleteMovieHandler(e)} /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// Task 4b-4: mapStateToProps
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}
// Task 4b-3: deploy connect method and deleteMovie action
// export default Movie;
export default connect(mapStateToProps, {deleteMovie})(Movie);