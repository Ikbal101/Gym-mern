import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/Authproviders";
import './Class.css'
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassesTable = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [, refetch] = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  useEffect(() => {
    fetch("https://fitcraft-academy-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (classItem) => {
    if (user && user.email) {
      const selectItem = {
        classId: classItem._id,
        title: classItem.title,
        image: classItem.image,
        instructorName: classItem.instructorName,
        availableSeats: classItem.availableSeats - 1,
        price: classItem.price,
        email: user.email,
      };

      fetch("https://fitcraft-academy-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Please login to order the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page
          window.location.href = "/login";
        }
      });
    }
  };

  const isDisabled =
    (isAdminLoading || isInstructorLoading) ||
    (isAdmin || isInstructor);

  return (
    <div>
      {classes.map((classItem) => (
        <div key={classItem._id} className="card">
          <figure><img src={classItem.image} alt="Class" /></figure>
          <p className="price"> Price: ${classItem.price}</p>
          <div className="card-body">
            <h2 className="card-title">Class Name: {classItem.title}</h2>
            <p className="font-bold">Instructor Name: <span className="text-orange-700">{classItem.instructorName}</span></p>
            <p className="font-bold">Available Seats: <span className="text-green-700">{classItem.availableSeats}</span></p>
            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(classItem)}
                className="btn btn-outline bg-slate-100 border border-b-4 border-sky-500 text-sky-500"
                disabled={isDisabled}
              >
                {isDisabled ? "Only for Students" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesTable;
