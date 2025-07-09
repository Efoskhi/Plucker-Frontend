import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import CustomError from "../types/customError";

const useWallet = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ paymentMethod, setPaymentMethod ] = React.useState('');
    const [ amount, setAmount ] = React.useState(0);

    const handleGeneratePaymentLink = async () => {
        try {
            setIsLoading(true);

            if(!amount || isNaN(amount)) {
                throw new CustomError('Enter a topup amount');
            }

            if(!paymentMethod) {
                throw new CustomError('Select a payment method');
            }

            const { data: response } = await axiosClient.post(`/payment/${paymentMethod}`, { amount: Number(amount) });

            const paymentUrl = response.data.paymentUrl;
            window.open(paymentUrl, '_blank');

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        paymentMethod,
        amount,
        setAmount,
        handleGeneratePaymentLink,
        setPaymentMethod,
    }
}

export default useWallet;