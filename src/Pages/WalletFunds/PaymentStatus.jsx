import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import bgStars from "../../assets/Background.png"; // Adjust the path as needed
import Faces from "../../assets/Faces.png"; 
import Strike from "../../assets/Strike.png"; 
import Banner from "../../assets/Banner4.png"; 
import Level from "../../assets/Level.png"; 

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const errorMessage = searchParams.get('message');

  const message =
    status === 'success'
      ? 'Your payment was processed successfully.'
      : errorMessage || 'Something went wrong with your payment. Please try again.';

  if (status !== 'success' && status !== 'error') {
    return (
      <div className="text-white h-screen flex items-center justify-center bg-[#0D0D0D]">
        <p>Invalid status</p>
      </div>
    );
  }

  const isSuccess = status === 'success';

  return (
    <div
        className="min-h-screen bg-cover bg-center text-white relative z-0"
        style={{ backgroundImage: `url(${bgStars})` }}
    >
        <img
            src={Banner}
            alt=""
            className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-24"
        />
        <img
            src={Level}
            alt=""
            className="absolute  flex items-end justify-end  -z-10 right-0 top-40"
        />
        <img
            src={Faces}
            alt=""
            className="absolute right-0 bottom-0 flex  mx-auto -z-10 "
        />
        <img src={Strike} className="absolute left-0 -z-10 bottom-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1A1A1A] text-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
                <div className="text-6xl mb-4 flex justify-center">
                {isSuccess ? (
                    <FaCheckCircle className="text-green-400" />
                ) : (
                    <FaTimesCircle className="text-red-500" />
                )}
                </div>
                <h2 className="text-2xl font-bold mb-2">
                    {isSuccess ? 'Payment Successful' : 'Payment Failed'}
                </h2>
                <p className="text-sm text-gray-400 mb-6">{message}</p>
                <a
                    href="/MyWallet"
                    className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-6 rounded"
                >
                    Go To Wallet
                </a>
            </div>
        </div>
    </div>
  );
};
export default PaymentStatus;
