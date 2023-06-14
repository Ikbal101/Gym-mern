import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import './manage.css'
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useCart();

  const handleDelete = (classId) => {
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
        axiosSecure.delete(`/carts/${classId}`)
          .then(res => {
            console.log('deleted res', res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your class has been deleted.',
                'success'
              );
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user) {
      axiosSecure.get("/carts").then((response) => {
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
    axiosSecure.put(`/carts/${classId}`, { status: "approved" })
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
    axiosSecure.put(`/carts/${classId}`, { status: "denied" })
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
    axiosSecure.put(`/carts/${classId}`, { status: "pending" })
      .then((response) => {
        // Success! Handle any further actions or notifications if needed
      })
      .catch((error) => {
        // Error occurred while updating the status, handle the error
      });
  };

  return (
    <div>
      <h1>Manage Classes</h1>
      <div className="class-list">
        {classes.map((classItem) => (
          <div key={classItem._id} className="class-item">
            <div className="class-info">
              <h2>{classItem.name}</h2>
              <p>{classItem.description}</p>
              <p>Status: {classItem.status}</p>
            </div>
            <div className="class-actions">
              <button
                className="approve-button"
                onClick={() => handleApprove(classItem._id)}
                disabled={classItem.status === "approved"}
              >
                Approve
              </button>
              <button
                className="deny-button"
                onClick={() => handleDeny(classItem._id)}
                disabled={classItem.status === "denied"}
              >
                Deny
              </button>
              <button
                className="pending-button"
                onClick={() => handlePending(classItem._id)}
                disabled={classItem.status === "pending"}
              >
                Pending
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(classItem._id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
