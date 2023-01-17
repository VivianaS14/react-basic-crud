import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../api/users";

const GetUsers = () => {
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await getUsers();
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>GetUsers.jsx</h3>
      {IsLoading && <p>Loading...</p>}
      {error && <p>Ups error</p>}
      {data && <UserList list={data} />}
    </>
  );
};

export default GetUsers;
