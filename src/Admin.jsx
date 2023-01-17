import React from "react";
import CreateUser from "./container/CreateUser";
import GetUsers from "./container/GetUsers";

const Admin = () => {
  return (
    <>
      <h1>Admin.jsx</h1>
      <div className="p-1">
        <CreateUser />
        <GetUsers />
      </div>
    </>
  );
};

export default Admin;
