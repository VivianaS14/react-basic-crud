import React from "react";
import CreateUser from "./container/CreateUser";

const Admin = () => {
  return (
    <>
      <h1>Admin.jsx</h1>
      <div className="p-1">
        <CreateUser />
      </div>
    </>
  );
};

export default Admin;
