import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import './manage.css'
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
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

            axiosSecure.delete(`/class/${item._id}`)
                .then(res => {
                    console.log('deleted res', res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

        }
    })
}
  useEffect(() => {
    if (user) {
      axiosSecure.get("/class").then((response) => {
        setClasses(response.data);
      });
    }
  }, [axiosSecure, user]);

  const handleApprove = (classId) => {
    // Update the status of the class with the given classId to "approved" and save the changes
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === classId) {
        return { ...classItem, status: "approved" };
      }
      return classItem;
    });
    setClasses(updatedClasses);

    // Make an API request to update the status in the backend
    axiosSecure.put(`/class/${classId}`, { status: "approved" })
      .then((response) => {
        // Success! Handle any further actions or notifications if needed
      })
      .catch((error) => {
        // Error occurred while updating the status, handle the error
      });
  };

  const handleDeny = (classId) => {
    // Update the status of the class with the given classId to "denied" and save the changes
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === classId) {
        return { ...classItem, status: "denied" };
      }
      return classItem;
    });
    setClasses(updatedClasses);

    // Make an API request to update the status in the backend
    axiosSecure.put(`/class/${classId}`, { status: "denied" })
      .then((response) => {
        // Success! Handle any further actions or notifications if needed
      })
      .catch((error) => {
        // Error occurred while updating the status, handle the error
      });
  };

  const handlePending = (classId) => {
    // Update the status of the class with the given classId to "pending" and save the changes
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === classId) {
        return { ...classItem, status: "pending" };
      }
      return classItem;
    });
    setClasses(updatedClasses);

    // Make an API request to update the status in the backend
    axiosSecure.put(`/class/${classId}`, { status: "pending" })
      .then((response) => {
        // Success! Handle any further actions or notifications if needed
      })
      .catch((error) => {
        // Error occurred while updating the status, handle the error
      });
  };

  return (
    <div className="table-container">
      <h2>Manage Classes</h2>
      {classes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td>
                  <img src={classItem.image} alt={classItem.title} />
                </td>
                <td>{classItem.title}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.instructorEmail}</td>
                <td>{classItem.availableSeats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td className="actions">
                  {classItem.status === "pending" && (
                    <div>
<button onClick={() => handleApprove(classItem.id)}>Approve</button>
<button onClick={() => handleDeny(classItem.id)}>Deny</button>
                      <button onClick={() => handleFeedback(classItem.id)}>Send Feedback</button>
                    </div>
                  )}
                </td>
                <td>
                                    <button onClick={() => handleDelete(classItem)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes added by the instructor.</p>
      )}
    </div>
  );
};

export default ManageClasses;
