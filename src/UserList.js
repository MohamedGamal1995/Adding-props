import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { movieID, profiles, users } = this.props;
    const filteredProfile = profiles.filter(
      (profile) => Number(profile.favoriteMovieID) === movieID
    );

    return (
      <ol>
        {filteredProfile.map((fp) => (
          <li key={fp.userID}>{users[fp.userID].name}</li>
        ))}
      </ol>
    );
  }
}

export default UserList;
