import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
// Task 3a: setting state to initialState
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }

    // Task 4d: add in ADD_MOVIE case
        case ADD_MOVIE:
            // Task 4e: returning a version of state with new movie values passed in through the payload
            return {
                movies: state.movies.filter(item=>(action.payload === item.id))
            }

        default:
            return state;
    }
}

export default reducer;