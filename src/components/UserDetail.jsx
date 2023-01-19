import React from "react";

const UserDetail = ({ id, name, username, age }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{age}</p>
    </div>
  );
};

export default UserDetail;
