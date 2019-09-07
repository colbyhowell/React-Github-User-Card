import React from "react";

const UserFeed = props => {
  console.log(props);
  return (
    <div className="user-card">
      {props.users.map(user => {
        return <div>{user.login}</div>;
      })}
    </div>
  );
};

export default UserFeed;
