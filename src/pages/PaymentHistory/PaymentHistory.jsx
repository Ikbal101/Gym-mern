import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "./PaymentHistory.css"

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payments?email=${user.email}`).then((res) => {
        setPaymentHistory(res.data.reverse()); // Reverse the array to display the newest payment at the top
      });
    }
  }, [axiosSecure, user]);

  return (
    <div className="payment-history">
             <Helmet>
        <title>Fitcraft | Payment History</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-violet-900">Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment.transactionId}>
              <td>{payment.transactionId}</td>
              <td>{payment.date}</td>
              <td>{payment.price}</td>
              {/* Add more table cells for additional payment details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PaymentHistory;
