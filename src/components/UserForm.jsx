import React from "react";

const UserForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h3>New User:</h3>
        </div>
        <div className="col-6">
          <form>
            <input type="text" className="form-control mb-2" placeholder="id" />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="username"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="name"
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="age"
            />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
