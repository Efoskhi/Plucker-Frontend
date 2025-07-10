import React from "react";
import toast from "react-hot-toast";
import CustomError from "../types/customError";
import axiosClient from "../utils/axiosClient";

const useLeaderboard = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ leaderboard, setLeaderboard ] = React.useState([]);
    const [ filter, setFilter ] = React.useState({
        dateFrom: null,
        dateTo: null,
        pageSize: 10,
    })

    const getLeaderboard = async () => {
        try {
            setIsLoading(true);

            const params = new URLSearchParams();

            if (filter.dateFrom) params.append("dateFrom", filter.dateFrom);
            if (filter.dateTo) params.append("dateTo", filter.dateTo);
            if (filter.pageSize) params.append("pageSize", String(filter.pageSize));

            const { data: response } = await axiosClient.get(`/leaderboard?${params.toString()}`);

            setLeaderboard(response.data);

        } catch(error) {
            let message = 'Something went wrong getting leaderboard, please try again';
            if(error instanceof CustomError) {
                message = error.message;
            }
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getLeaderboard();
    }, [filter])

    return {
        isLoading,
        leaderboard,
        filter,
        setFilter
    }
}

export default useLeaderboard;