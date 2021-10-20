export const DELETE_MOVIE = "DELETE_MOVIE";
// Task 4f-1: create action creator for addMovie
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

// Task 4f-2: create action creator for addMovie part 2
export const addMovie = (movie)=>{
    console.log(movie)
    return({type: ADD_MOVIE, payload:movie});
}