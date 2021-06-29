/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useCallback } from "react";
import { fetchUsers } from "../features/gateway";

const Users = () => {
  const [users, setUsers] = useState([]);
  const handleFetchUsers = useCallback(
    () => fetchUsers().then((data) => setUsers(data)),
    []
  );

  useEffect(() => handleFetchUsers, [handleFetchUsers]);

  return (
    <>
      <button onClick={handleFetchUsers}>REFRESH USERS</button>
      <table className="table">
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.cell}>
                <td className="table_data">{user.name.first}</td>
                <td className="table_data">{user.email}</td>
                <td className="table_data">{user.login.username}</td>
                <td className="table_data">{user.login.password}</td>
                <td className="table_data">
                  <img src={user.picture.medium} alt="picture" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
