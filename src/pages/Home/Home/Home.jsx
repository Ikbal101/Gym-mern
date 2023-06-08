import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularClasses from "../PopularClass/PopularClasses";
import PopularInstructors from "../PopularInstractors/PopularInstractors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fitcraft | Home</title>
            </Helmet>
          <Banner></Banner>
          <PopularClasses/>
         <PopularInstructors/>
         <Featured/>
        </div>
    );
};

export default Home;