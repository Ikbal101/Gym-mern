import  { useEffect, useState } from 'react';
import './populsr.css';

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('classes.json');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchData();
  }, []);

  // Sort classes based on the number of students in descending order
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  return (
    <div className='mt-24 mb-10'>
      <h2 className='popular-classes'>-----Popular Classes----- <hr className='w-11 h-1  mx-auto bg-red-600' /></h2>
      <div className="class-container">
        {sortedClasses.slice(0, 6).map((classItem) => (
          <div key={classItem.title} className="class-card">
            <img src={classItem.image} alt={classItem.title} />
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
