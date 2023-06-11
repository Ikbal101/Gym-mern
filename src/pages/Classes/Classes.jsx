import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/UseClasses";
import ClassesTable from "./classesTable";


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
    <div className='grid md:grid-cols-3 gap-10'>
    {
        // eslint-disable-next-line react/jsx-key
        classData.map((classItem,index) => <ClassesTable
           key={classItem._id}
          classItem={classItem}
          index={index}
        ></ClassesTable>)
      }
    </div>
    </div>
  );
};

export default Classes;
