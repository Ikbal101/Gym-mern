import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyEnrollClass = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  console.log(payments);
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payments?email=${user.email}`).then((res) => {
        setPayments(res.data);
      });
    }
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <Helmet>
        <title>Fitcraft | My Enrolled Classes</title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold text-violet-800">Enrolled Classes</h2>
      <hr className="w-4/5 bg-violet-800 h-1 mx-auto" />

      <div className="overflow-x-auto w-[700px]">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={payment.image} alt="Class Avatar" />
                    </div>
                  </div>
                </td>
                <td>{payment.title}</td>
                <td className="text-end">${payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClass;
