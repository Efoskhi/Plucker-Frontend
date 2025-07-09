import React from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";

const getSplittedUsername = (username: string): string => {
  const arr = username.split('_');
  const name = arr.slice(1).join('_');
  return name;
};


const useProfile = () => {
    const { user, handleSetUser, handleLogout } = useAppContext();

    const [ inputs, setInputs ] = React.useState({
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        username: getSplittedUsername(user!.username) || user!.username,
        currentPassword: '',
        password: '',
        confirmPassword: '',
    });
    const [  isLoading, setIsLoading ] = React.useState(false);

    const handleInput = (field: string, value: any) => {
        setInputs(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleUpdateProfile = async (callback?: () => void) => {
        try {
            setIsLoading(true);

            await axiosClient.put('/user', inputs);

            const username = inputs.username || getSplittedUsername(user!.username) || user!.username;

            handleSetUser({
                ...user!,
                email: inputs.email || user!.email,
                phoneNumber: inputs.phoneNumber || user!.phoneNumber,
                hasSetPassword: inputs.password ? true : user!.hasSetPassword,
                username: user!.planID ? username : `plucker_${username}`,
            })
            
            setInputs(prev => ({
                ...prev,
                currentPassword: '',
                password: '',
                confirmPassword: '',
            }))

            toast.success('Profile has been updated');

            if(callback && typeof callback === 'function') callback();

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleDeleteAccount = async () => {
        try {
            setIsLoading(true);

            await axiosClient.delete('/user', {
                data: { password: inputs.password },
            });

            handleLogout();

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        inputs,
        handleInput,
        handleUpdateProfile,
        handleDeleteAccount,
    }
}

export default useProfile;