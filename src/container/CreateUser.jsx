import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { createUser } from "../api/users";

const CreateUser = () => {
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const sendUser = async (newUser) => {
    try {
      setIsLoading(true);
      await createUser(newUser);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Create User.jsx</h2>
      <span>Handle http request</span>
      <div className="container">
        <UserForm onSubmit={sendUser} />
      </div>
    </>
  );
};

export default CreateUser;
