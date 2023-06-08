import { useState, useEffect } from 'react';
import './style.css'

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Fetch the instructors.json file
    fetch('instructors.json')
      .then(response => response.json())
      .then(data => {
        // Sort the instructors by students in descending order
        const sortedInstructors = data.sort((a, b) => b.students - a.students);
        setInstructors(sortedInstructors.slice(0, 6)); // Only keep the top 6 instructors
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % instructors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [instructors.length]);

  return (
    <div className="popular-instructors mb-10 mt-16">
      <h2 className="popular-classes">-----Popular Instructors-----
        <hr className="w-11 h-1 mx-auto bg-red-600" />
      </h2>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {instructors.map((instructor, index) => (
            <div key={index} className="carousel-slide">
              <div className="instructor">
                <div className="instructor-image-container">
                  <img className="instructor-image" src={instructor.image} alt={instructor.name} />
                </div>
                <div className="font-bold">{instructor.title}</div>
                <div className="instructor-name">{instructor.name}</div>
                <div className="instructor-students">Students: {instructor.students}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
