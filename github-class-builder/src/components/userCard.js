import React from "react";

import UserFeed from "./userFeed";

const UserCard = props => {
  console.log(props);
  return (
    <div className="user-card-container">
      <UserFeed users={props.users} key={props.users.id} />
    </div>
  );
};

export default UserCard;
