import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClass/PopularClasses";
import PopularInstructors from "../PopularInstractors/PopularInstractors";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <PopularClasses/>
         <PopularInstructors/>
        </div>
    );
};

export default Home;