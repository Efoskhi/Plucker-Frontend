import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { Bank } from "../types/bank.type";

const useBank = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ banks, setBanks ] = React.useState<Bank[]>([]);

    const getBanks = async () => {
        try {
            setIsLoading(true);

            const { data: response } = await axiosClient.get('bank');

            setBanks(response.data)

        } catch(error) {
            toast.error('Error getting banks');
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getBanks();
    }, [])

    return {
        isLoading,
        banks
    }
}

export default useBank;