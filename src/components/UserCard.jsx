import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ username, name, age, id }) => {
  const LINK_ADDRESS = `/users/${id}`;

  return (
    <div>
      <div className="card text-bg-light mb-3 w-50">
        <div className="card-header">{username}</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{age}</p>
        </div>
        <Link className="btn btn-info" to={LINK_ADDRESS}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
