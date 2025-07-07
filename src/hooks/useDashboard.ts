import React from 'react';
import axiosClient from '../utils/axiosClient';
import toast from 'react-hot-toast';

type GameTypes = 'TRENDING' | 'NEW_CHALLANGES' | 'HIGHEST_PAYOUTS' | 'TOURNAMENT';

const useDashboard = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ games, setGames ] = React.useState({
        TRENDING: [],
        NEW_CHALLANGES: [],
        HIGHEST_PAYOUTS: [],
    })
    const [ currentTab, setCurrentTab ] = React.useState<GameTypes>('TRENDING');

    const getGames = async (type: GameTypes) => {
        try {
            setIsLoading(true);

            const { status, data: response } = await axiosClient.get(`/game?gameType=${currentTab}`);

            setGames(prev => ({
                ...prev,
                [type]: response.data || []
            }));

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }


    React.useEffect(() => {
        getGames(currentTab);
    }, [currentTab])

    return {
        isLoading,
        games,
        currentTab,
        setCurrentTab,
    }
}

export default useDashboard;