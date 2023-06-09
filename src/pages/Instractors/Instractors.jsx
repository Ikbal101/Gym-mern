import { Helmet } from 'react-helmet-async';
import useInstructors from "../../hooks/useInstructors";


const Instructors = () => {
const [instructors] = useInstructors()

  return (
      <div className="mb-24">
        <Helmet>
            <title>Fitcraft | Instructors</title>
        </Helmet>
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
              Numbers
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number Of Classes Taken</th>
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
            <img src={instructor.image} alt="Instructor Avatar" />
          </div>
        </div>
      </div>
    </td>
    <td className="font-bold">{instructor.name}</td>
    <td>{instructor.email}</td>
    <td>{instructor.numberOfClassesTaken}</td>
    <td className="font-bold">
      <ul>
        {instructor.classesTaken.map((className, index) => (
          <li key={index}>{className}</li>
        ))}
      </ul>
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
