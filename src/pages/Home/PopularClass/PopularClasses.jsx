import './populsr.css'
const PopularClasses = () => {
  const classes = [
    {
      title: 'Cardio Kickboxing',
      description: 'This high-intensity class combines cardio exercises with kickboxing techniques to burn calories, improve cardiovascular fitness, and tone the entire body.',
      image: 'https://img.freepik.com/free-photo/male-boxer-boxing-punching-bag_155003-3063.jpg?size=626&ext=jpg&uid=R91300056&ga=GA1.1.350930333.1680253427&semt=ais',
      students: 50,
    },
    {
      title: 'HIIT (High-Intensity Interval Training)',
      description: 'HIIT workouts involve short bursts of intense exercise followed by brief recovery periods. These classes are known for their calorie-burning efficiency and ability to boost metabolism.',
      image: 'https://img.freepik.com/premium-photo/bearded-athletic-looking-bodybulder-work-out-with-battle-rope-dark-with-smoke-strength-motivation_136403-10344.jpg?w=996',
      students: 65,
    },
    {
      title: 'Zumba',
      description: 'Zumba is a dance fitness program that incorporates Latin and international music. It offers a fun and energetic workout that helps burn calories, improve coordination, and tone muscles.',
      image: 'https://img.freepik.com/free-photo/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light_155003-16406.jpg?w=1380&t=st=1686181162~exp=1686181762~hmac=6f1c151a85b00925bd1a3dc07bc33a9bdc3e3e795667c485a31bc5bb54a8219c',
      students: 80,
    },
    {
      title: 'Yoga',
      description: 'Yoga classes provide a holistic approach to weight loss by combining physical postures, breathing exercises, and meditation. They improve flexibility, strength, and overall well-being.',
      image: 'https://img.freepik.com/free-photo/young-woman-doing-half-lotus-toe-balance-exercise_1163-5069.jpg?w=996&t=st=1686181975~exp=1686182575~hmac=0d52f20a1449808e3e7769310873c7e4b84c5b575c6bf0ba720c774ec09e2757',
      students: 45,
    },
    {
      title: 'Spinning/Cycling',
      description: 'Indoor cycling classes are an excellent way to burn calories and improve cardiovascular endurance. They simulate outdoor cycling experiences and are suitable for all fitness levels.',
      image: 'https://img.freepik.com/free-photo/people-doing-indoor-cycling_23-2149270268.jpg?w=996&t=st=1686181467~exp=1686182067~hmac=bc6e8f09334b873be45a022798bbb07dd2da9ddb45a2d0716e1d30d9f32f51e4',
      students: 70,
    },
    {
      title: 'Boot Camp',
      description: 'Boot camp classes combine strength training exercises with cardiovascular drills. They typically include a mix of bodyweight exercises, resistance training, and interval training, aiming to burn fat and build muscle.',
      image: 'https://img.freepik.com/premium-photo/fit-people-crawling-net-during-obstacle-course_107420-98233.jpg?w=996',
      students: 55,
    },
  ];

  // Sort classes based on the number of students in descending order
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  return (
    <div className='mt-24 mb-10'>
      <h2 className='popular-classes'>Popular Classes  <hr className='w-11 h-1  mx-auto bg-red-600' /></h2>
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
