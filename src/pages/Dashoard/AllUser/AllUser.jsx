import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${item._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'The user has been deleted.',
                'success'
              );
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          });
      }
    });
  };
  

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })

};

const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Instructor Now!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch(error => {
      console.error(error);
      // Handle any error that occurs during the update operation
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to make the user an Instructor',
        showConfirmButton: false,
        timer: 1500
      });
    });
  };
  

  return (
    <div className="w-full">
      <Helmet>
        <title>Fitcraft | Manage Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
  <tr key={user._id}>
    <th>{index + 1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td className="font-bold">
      {user.role === "admin" ? (
        "Admin"
      ) : user.role === "instructor" ? (
        
        "Instructor"
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => handleMakeAdmin(user)}
            className="btn btn-ghost bg-green-700 text-white"
          >
            <FaUserShield />
          </button>
          <button
            onClick={() => handleMakeInstructor(user)}
            className="btn btn-ghost bg-green-700 text-white"
          >
            <FaUserTie />
          </button>
        </div>
      )}
    </td>
    <td>
      <button
        onClick={() => handleDelete(user)}
        className="btn btn-ghost bg-red-600 text-white"
      >
        <FaTrashAlt />
      </button>
    </td>
  </tr>
))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
