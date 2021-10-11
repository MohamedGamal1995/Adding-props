import React, { Component } from "react";
import UserList from "./UserList";

class PopularMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArray = Object.values(movies);

    return (
      <div>
        {moviesArray.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <UserList movieID={movie.id} profiles={profiles} users={users} />
          </div>
        ))}
      </div>
    );
  }
}

export default PopularMovies;
