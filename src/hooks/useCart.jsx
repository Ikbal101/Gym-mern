import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import useAxiosSecure from './useAxiosSecure';


const useCart = () =>{
    const{user}= useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
      
        queryFn: async () => {
          const res = await axiosSecure(`/carts?email=${user?.email}`)
          console.log('res from axios', res)
          return res.data;
      },
      })
      return[cart,refetch]
}
export default useCart;