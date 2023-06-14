import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            if(!user){
                return false;
            }
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default useInstructor;