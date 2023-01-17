import React from "react";

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
            <div key={e.id} className="card text-bg-light mb-3 w-50">
              <div className="card-header">{e.username}</div>
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">{e.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
