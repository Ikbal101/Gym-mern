import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/Authproviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token=import.meta.env.VITE_Image_Upload_Token;
const AddClasses = () => {
    const{user} = useContext(AuthContext);
    const[axiosSecure] = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset
      } = useForm();

      const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${img_hosting_token}`;

      const onSubmit = data => {
        console.log(data);
        const formData= new FormData();
        formData.append('image',data.image[0]);

        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {title,price,availableSeats}=data;
                const classItem = {
                    title,
                    image:imgURL,
                    price: parseFloat(price),
                    availableSeats: parseFloat(availableSeats),
                    instructorName: user?.displayName,
                    instructorEmail: user?.email,
                  };
                
                console.log(classItem);
                axiosSecure.post('/class', classItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            } 
        }) 

    };

    return (
        <div>
            <Helmet>
                <title>Fitcraft | Add CLass</title>
            </Helmet>
            <h2 className="text-txl text-center text-violet-800 text-2xl font-bold">Add A New Class</h2>
            <div className="form-container">
     
     <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("title", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" value={user?.displayName}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" value={user?.email}
                        className="input input-bordered w-full " />
                </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">AvailableSeats*</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
              
            
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
</div>

  
        </div>
    );
};

export default AddClasses;