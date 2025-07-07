import React from "react";
import axiosClient from "../utils/axiosClient";

const useTournaments = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ tournaments, setTournaments ] = React.useState([]);

    const getTournaments = async () => {
        try {
            setIsLoading(true);

            const { data: response } = await axiosClient.get(`/game?gameType=TOURNAMENT`);

            setTournaments(response.data);33
        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getTournaments();
    }, []);

    return {
        isLoading,
        tournaments,
    }

}

export default useTournaments;