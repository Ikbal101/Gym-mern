import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='mb-10'>
      <AutoplaySlider
    play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={4000}
  >
    <div data-src="https://img.freepik.com/free-vector/gradient-gym-webinar_23-2149658581.jpg?size=626&ext=jpg"/>
    <div data-src="https://img.freepik.com/free-vector/gradient-gym-class-facebook-post_23-2149526908.jpg?w=900&t=st=1686156641~exp=1686157241~hmac=68a16a429d3929f85fa81ca9b8ab6e83a52ba31ef22eee1c074fe21fab9dd2e8" />
    <div data-src="https://img.freepik.com/free-vector/gradient-gym-class-twitch-background_23-2149526896.jpg?w=996&t=st=1686155581~exp=1686156181~hmac=c2943c2f49e4974c91ba70a3f4eaf7f90f3ec7410a4b960eb84ce6fd211bc667" />
  </AutoplaySlider>
        </div>
    );
};

export default Banner;