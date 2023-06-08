import featuredImg from "../../../assets/images/20230608103414_[fpdl.in]_handsome-muscular-fitness-bodybuilder-doing-heavy-weight-exercise-biceps-machine-with-cable-gym_600776-11202_normal.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="mt-24 mb-10 pt-8 featured-item bg-fixed ">
      <h2 className="popular-classes">
        -----Featured Result-----{" "}
        <hr className="w-11 h-1  mx-auto bg-red-600" />
      </h2>
      <div className="md:flex justify-center items-center py-10 px-28 bg-slate-600 bg-opacity-60">
            <div>
                <img src={featuredImg} alt="" className="featured-img rounded-xl" />
            </div>
            <div className="md:ml-10 ">
                <p className="text-white font-bold">
Welcome to our website! We are dedicated to providing exceptional fitness  solutions tailored to your needs. Our experienced trainers, state-of-the-art  facilities,  and personalized br programs will help you achieve your fitness goals and embark on a journey of improved health and well-being.</p>
<button className="btn btn-outline btn-base-100 border-t-0 border-l-0 border-r-0 ">Read More</button>
            </div>
      </div>
    </div>
  );
};

export default Featured;
