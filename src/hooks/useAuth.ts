import React from 'react';
import CustomError from '../types/customError';
import toast from 'react-hot-toast';
import axiosClient from '../utils/axiosClient';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const useAuth = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ inputs, setInputs ] = React.useState({
        login: {
            email: '',
            password: '',
        },
        signup: {
            username: '',
            password: '',
            fullname: '',
            email: '',
            confirmPassword: '',
            phoneNumber: '',
        }
    });

    const navigate = useNavigate();
    const { 
        accountVerifyEmail,
        setAccountVerifyEmail, 
        handleSetUser, 
    } = useAppContext();

    const handleInput = (fieldKey: string, value: any) => {
        const [ parentField, childKey ] = fieldKey.split('.');

        setInputs(prev => ({
            ...prev,
            [parentField]: {
                ...prev[parentField],
                [childKey]: value,
            }
        }))
    }

    const handleSignup = async (e: Event) => {
        e.preventDefault();

        try {
            const { fullname, username, email, phoneNumber, password, confirmPassword } = inputs.signup;

            if(!fullname || fullname.length < 5) return toast.error('Please enter a valid fullname');
            if(!username) return toast.error('Enter your username');
            if(!email) return toast.error('Enter your email address');
            if(!phoneNumber) return toast.error('Enter your phone number');
            if(!password) return toast.error('Enter your password');
            if(!confirmPassword) return toast.error('Retype your password');
            if(password !== confirmPassword) return toast.error('Passwords does not match');

            setIsLoading(true);

            const { data: response, status } = await axiosClient.post('/auth/register', inputs.signup);

            if(status !== 201 && status !== 200) {
                return toast.error(response.message);
            }

            toast.success(response.message);
            setAccountVerifyEmail(email);
            navigate('/verifyemail');

        } catch(error) {
            let message = 'Something went wrong signing you up';
            if(error instanceof CustomError) {
                message = error.message;
            }

            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleResendVerificationToken = async () => {
        try {
            setIsLoading(true);

            const { status, data: response } = await axiosClient.post(`/auth/resend-token?email=${accountVerifyEmail}`);

            if(status !== 200 && status !== 201) {
                return toast.error(response.message);
            }

            toast.success(response.message);

        } catch(error) {
            let message = 'Something went wrong validating you';
            if(error instanceof CustomError) {
                message = error.message;
            }

            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleValidateUser = async (token: string) => {
        try {
            setIsLoading(true);

            const { status, data: response } = await axiosClient.get(`/auth/validate-user/${token}`);

            if(status !== 200 && status !== 201) {
                throw new CustomError(response.message);
            }
            
            handleSetUser(response.data)
            localStorage.setItem("authToken", response.data.access_token);

            navigate('/Explore');

        } catch(error) {
            let message = 'Something went wrong validating you';
            if(error instanceof CustomError) {
                message = error.message;
            }

            throw new Error(message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleVerifyEmail = async (token: string) => {
        try {
            setIsLoading(true);

            const { status, data: response } = await axiosClient.post(`/auth/verify/${token}`);

            if(status !== 200 && status !== 201) {
                throw new CustomError(response.message);
            }

        } catch(error) {
            let message = 'Something went wrong validating you';
            if(error instanceof CustomError) {
                message = error.message;
            }

            throw new Error(message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleLogin = async (e: Event) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const { status, data: response } = await axiosClient.post(`/auth/login`, inputs.login);

            if(status !== 200 && status !== 201) {
                throw new CustomError(response.message);
            }

            handleSetUser(response.data.user)
            localStorage.setItem("authToken", response.data.accessToken);

            navigate('Explore');

        }  catch(error) {
            let message = 'Something went wrong validating you';
            if(error instanceof CustomError) {
                message = error.message;
            }

            toast.error(message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
    };


    return {
        isLoading,
        inputs,
        handleInput,
        handleSignup,
        handleValidateUser,
        handleVerifyEmail,
        handleResendVerificationToken,
        handleLogin,
        handleGoogleLogin,
    }

}

export default useAuth;