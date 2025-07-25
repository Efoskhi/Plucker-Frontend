import React from 'react';
import axiosClient from '../utils/axiosClient';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import CustomError from '../types/customError';

const useGamePlay = () => {
    const [ answer, setAnswer ] = React.useState('');
    const [ step, setStep ] = React.useState("form"); // form | loading | success

    const { currentGameDetails, user, handleSetUser } = useAppContext();

    const handlePlayGame = async () => {
        try {
            setStep('loading');

            const { data: response } = await axiosClient.post('/game/play', {
                gameID: currentGameDetails.id,
                submittedAnswer: answer,
            });

            setStep('success');

            handleSetUser({
                ...user!,
                accountBalance: user!.accountBalance - currentGameDetails.entryFee
            })

            return response;

        } catch(error) {
            let message = 'Something went wrong playing game, please try again';
            if(error instanceof CustomError) {
                message = error.message;
            }
            setStep('form');
            toast.error(message);
            throw error;
        }
    }

    const getPlayedGame = async () => {
        try {
            const { data: response } = await axiosClient.get('/game/played');

            return response;

        } catch(error) {
            let message = 'Something went wrong getting submissions, please try again';
            if(error instanceof CustomError) {
                message = error.message;
            }
            toast.error(message);
        }
    }

    React.useEffect(() => {
        console.log({answer})
    }, [])

    return {
        step,
        answer,
        handlePlayGame,
        setAnswer,
        getPlayedGame,
    }
}

export default useGamePlay;