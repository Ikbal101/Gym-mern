import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./MyClass.css";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/carts")
      .then((response) => {
        const instructorClasses = response.data.filter(
          (classItem) => classItem.instructorEmail === user?.email
        );
        setClasses(instructorClasses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure, user]);

  return (
    <div>
      <h2> My Classes</h2>
      <table className="class-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Available Seats</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td>
                <img src={classItem.image} alt="Class Image" />
              </td>
              <td>{classItem.title}</td>
              <td>{classItem.availableSeats}</td>
              <td>{classItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
