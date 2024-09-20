import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Vinitha",
      image:
        "https://img.freepik.com/free-photo/brunette-girl-walking-through-park-autumn_1157-17764.jpg?ga=GA1.1.993419943.1721106008&semt=ais_hybrid",
      places: 3,
    },
  ];

  return (
    <>
      <UsersList items={USERS} />
    </>
  );
}

export default Users;
