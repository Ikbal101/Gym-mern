import useClasses from '../../../hooks/UseClasses';
import './populsr.css';

const PopularClasses = () => {
  const [classData] = useClasses();

  // Sort classes based on the number of students in descending order
  const sortedClasses = [...classData].sort((a, b) => b.students - a.students);

  return (
    <div className='mt-24 mb-10'>
      <h2 className='popular-classes'>
        Popular Classes <hr className='w-11 h-1 mx-auto bg-red-600' />
      </h2>
      <div className="class-container">
        {sortedClasses.slice(0, 6).map((classItem) => (
          <div key={classItem.title} className="class-card">
            <img src={classItem.image} alt={classItem.title} className="class-card-img" />
            <div className="class-info">
              <h3>{classItem.title}</h3>
              <p>{classItem.description}</p>
              <p className='font-bold'>{classItem.students} students</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
