import React from 'react';
import axiosClient from '../utils/axiosClient';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import CustomError from '../types/customError';

const useGamePlay = () => {
    const [ answer, setAnswer ] = React.useState('');
    const [ step, setStep ] = React.useState("form"); // form | loading | success

    const { currentGameDetails } = useAppContext();

    const handlePlayGame = async () => {
        try {
            setStep('loading');

            const { status } = await axiosClient.post('/game/play', {
                gameID: currentGameDetails!.id,
                submittedAnswer: answer,
            });

            setStep('success');

        } catch(error) {
            let message = 'Something went wrong playing game, please try again';
            if(error instanceof CustomError) {
                message = error.message;
            }
            setStep('form');
            toast.error(message);
        }
    }

    return {
        step,
        handlePlayGame,
        setAnswer,
    }
}

export default useGamePlay;