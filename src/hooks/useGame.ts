import React from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import axiosClient from "../utils/axiosClient";
import { Game } from "../types/game.type";

const useGame = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ similarGames, setSimilarGames ] = React.useState<Game[]>([]);

    const { currentGameDetails } = useAppContext();

    const getSimilarGames = async () => {
        try {
            setIsLoading(true);

            const gameType = currentGameDetails.isTournament ? 'TOURNAMENT' : 'TRENDING';

            const { data: response } = await axiosClient.get(`/game?gameType=${gameType}`);

            const games: Game[] = response.data;
            setSimilarGames(games.filter(item => item.id !== currentGameDetails.id));

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getSimilarGames();
    }, [currentGameDetails.isTournament])

    return {
        isLoading,
        similarGames,
    }
}

export default useGame;