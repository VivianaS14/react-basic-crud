import React from "react";
import UserCard from "./UserCard";

const UserList = ({ list }) => {
  return (
    <div className="container">
      <div className="row">
        <span>UserList.jsx</span>
        <div className="col-3">
          <h3>Get Users</h3>
        </div>
        <div className="col-6">
          {list.map((e) => (
            <UserCard
              key={e.id}
              username={e.username}
              name={e.name}
              age={e.age}
              id={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
