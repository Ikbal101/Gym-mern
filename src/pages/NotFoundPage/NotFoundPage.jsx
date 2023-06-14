import { Link } from "react-router-dom";
import image from '../../assets/images/403 Error Forbidden-bro.svg'
const NotFoundPage = () => {
    return (
        <div>
               <img className="h-96 w-full" src={image} alt="404 Error"  style={{"width":"900px" ,"margin":"0 auto","borderRadius":"8px"}}/>
      <Link to='/'><button className='btn bg-violet-700'>Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;