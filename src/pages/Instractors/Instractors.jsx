import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('classes.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        All the Instructors of our School
      </h2>
      <hr className="w-72 mx-auto h-1 bg-fuchsia-900" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number Of Classes</th>
              <th>Name of classes</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={instructor.instructor.image} alt="Instructor Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{instructor.instructor.name}</td>
                <td>{instructor.instructor.email}</td>
                <td>{instructor.instructor.numberOfClassesTaken}</td>
                <td>
                  {instructor.instructor.classesTaken.map((classTaken, classIndex) => (
                    <div key={classIndex}>{classTaken.className}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
