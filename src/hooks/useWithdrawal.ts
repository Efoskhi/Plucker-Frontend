import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { Withdrawal } from "../types/withdrawal.type";

const useWithdrawal = () => {
    const [ withdrawals, setWithdrawals ] = React.useState<Withdrawal[]>([]);
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ page, setPage ] = React.useState(1);
    const [ amount, setAmount ] = React.useState('');
    const [ paginationData, setPaginationData ] = React.useState({});

    const getWithdrawals = async () => {
        try {
            setIsLoading(true);

            const { data: response } = await axiosClient.get(`/withdrawal?page=${page}`);

            setWithdrawals(response.data.withdrawals);
            setPaginationData(response.data.pagination);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleCreateWithdrawal = async () => {
        try {
            setIsLoading(true);

            if(!amount) {
                return toast.error('Enter amount to withdraw')
            }

            const { data: response } = await axiosClient.post('/withdrawal', { amount: Number(amount) });

            setAmount('');
            toast.success(response.message);

            setTimeout(() => location.reload(), 500);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getWithdrawals();
    }, [])

    return {
        isLoading,
        paginationData,
        withdrawals,
        handleCreateWithdrawal,
        setAmount,
    }
}

export default useWithdrawal;