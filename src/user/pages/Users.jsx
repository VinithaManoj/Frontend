import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Sharuk",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1726028640~exp=1726029240~hmac=530c3ccf6c4a2f8498a56c706b505b20eae03de127fd534d3a4d2b9fa48fb72a",
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
