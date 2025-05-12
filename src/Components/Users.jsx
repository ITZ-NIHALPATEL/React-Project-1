import React from "react";

const Users = (props) => {
  const { users, setUsers, theme } = props;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <div
      className={`w-full max-w-sm rounded-lg shadow-lg p-6 overflow-y-auto ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.length === 0 ? (
          <p className="text-center">No users found</p>
        ) : (
          users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-sm ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div>
                <p className="text-lg font-semibold">{user.fullName}</p>
                <small>{user.email}</small>
              </div>
              <button
                onClick={() => deleteHandler(user.id)}
                className={`bg-red-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200 ${
                  theme === "dark" ? "hover:bg-red-500" : ""
                }`}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
