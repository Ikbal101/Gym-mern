import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/UseClasses";

const Classes = () => {
    const [classData] = useClasses();


  return (
    <div>
      <Helmet>
        <title>Fitcraft | Classes</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center">
        Available Classes of Our School
      </h2>
      <hr className="w-72 mx-auto h-1 bg-fuchsia-900" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
              Serial
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classData.map((classItem, index) => (
              <tr key={index}>
                <th>
                  {index+1}
                </th>
                <td>
                  <img
                    src={classItem.image}
                    alt="Class"
                    className="w-12 h-12 rounded rounded-full"
                  />
                </td>
                <td>{classItem.title}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.availableSeats}</td>
                <td>${classItem.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Select</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
