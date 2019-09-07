import React from "react";

const UserFeed = props => {
  console.log(props);
  return (
    <div className="row-flex">
      {props.users.map(user => {
        return <div className="user-card">{user.login}</div>;
      })}
    </div>
  );
};

export default UserFeed;
