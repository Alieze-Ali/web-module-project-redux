import React from 'react';
import { Link } from 'react-router-dom';
// Task 3d-1: import connect method from react-redux
import { connect } from 'react-redux';

const MovieHeader = (props) => {
    // Task 3d-4: setting appTitle to props
    const { appTitle } = props;
    //const appTitle = "";
    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}
// Task 3d-3: assigning mapStateToProps to state and connecting appTitle
const mapStateToProps = state => {
    return {
        appTitle: state.appTitle
    }
}

// Task 3d-2: deploying the connect method and mapping state to props
// export default MovieHeader;
export default connect(mapStateToProps)(MovieHeader);