import React, { useState } from "react";

const UserForm = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { id, name, username, age };
    console.log(user);
  };

  return (
    <div className="container">
      <h3>UserForm.jsx</h3>
      <div className="row">
        <div className="col-3">
          <h3>New User:</h3>
        </div>
        <div className="col-6">
          <form>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Id"
              value={id}
              onChange={handleId}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Age"
              value={age}
              onChange={handleAge}
            />
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
