import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { Payment } from "../types/payment.type";

const usePayment = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ payments, setPayments ] = React.useState<Payment[]>([]);
    const [ page, setPage ] = React.useState(1);
    const [ paginationData, setPaginationData ] = React.useState({});

    const getPayments = async () => {
        try {
            setIsLoading(true);

            const { data: response } = await axiosClient.get(`/payment?page=${page}`);

            setPayments(response.data.payments);
            setPaginationData(response.data.pagination);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getPayments();
    }, [])

    return {
        isLoading,
        payments,
        getPayments,
    }
}

export default usePayment;