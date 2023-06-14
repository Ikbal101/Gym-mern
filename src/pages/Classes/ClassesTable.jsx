import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/Authproviders";
import { useLocation, useNavigate } from "react-router-dom";
import './Class.css'
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassesTable = ({ classItem }) => {
  const { user } = useContext(AuthContext);
  const { title, image, instructorName, availableSeats, price, _id } = classItem; 
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const location = useLocation();
  const [seats, setSeats] = useState(availableSeats);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  const handleAddToCart = () => {
    if (user && user.email) {
      const selectItem = {
        classId: _id,
        title,
        image,
        instructorName,
        availableSeats: seats - 1,
        price,
        email: user.email
      };

      fetch('https://fitcraft-academy-server.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(selectItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setSeats(seats - 1);
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class added to cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to order the class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  };

  const isDisabled =
    seats === 0 ||
    (isAdminLoading || isInstructorLoading) ||
    (isAdmin || isInstructor);
  const cardStyle = seats === 0 ? "card red" : "card";

  return (
    <div className={cardStyle}>
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="price"> Price:${price}</p>
      <div className="card-body">
        <h2 className="card-title">Class Name: {title}</h2>
        <p className="font-bold">Instructor Name: <span className="text-orange-700">{instructorName}</span></p>
        <p className="font-bold">Available Seats: <span className="text-green-700">{seats}</span></p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border border-b-4 border-sky-500 mt-4"
            disabled={isDisabled}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesTable;
