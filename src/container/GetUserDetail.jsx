import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../api/users";
import UserDetail from "../components/UserDetail";

const GetUserDetail = () => {
  const params = useParams();

  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await getUserDetail(params.id);
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
    <div>
      <h4>Container: GetUserDetail.jsx</h4>
      {IsLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <UserDetail
          id={data.id}
          name={data.name}
          username={data.username}
          age={data.age}
        />
      )}
    </div>
  );
};

export default GetUserDetail;
