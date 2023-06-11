import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/Authproviders";
import { useLocation, useNavigate } from "react-router-dom";
import './Class.css'
import useCart from "../../hooks/useCart";

const ClassesTable = ({ classItem }) => {
  const { user } = useContext(AuthContext);
  const { title, image, instructorName, availableSeats, price,_id } = classItem; 
  const navigate = useNavigate();
  const[,refetch] = useCart()
  const location = useLocation();

  const handleAddToCart = (classItem) => {
    console.log(classItem);
    if (user && user.email) {
        const selectItem = {classId:_id,title,image,instructorName,availableSeats,price,email:user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(selectItem) // Pass classItem as the request body
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class added to cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
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
      })
    }
  }

  return (
    <div className="card-container">
      <div className="card">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="price"> Price:${price}</p>
        <div className="card-body">
          <h2 className="card-title">ClassName:{title}</h2>
          <p className="font-bold">Instructor Name: <span className="text-orange-700">{instructorName}</span></p>
          <p className="font-bold">Available Seats: <span className="text-green-700">{availableSeats}</span></p>
          <div className="card-actions">
          <button onClick={()=>handleAddToCart(classItem)} className="btn btn-outline bg-slate-100 border border-b-4 border-sky-500 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesTable;
