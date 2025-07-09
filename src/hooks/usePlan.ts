import React from "react";
import axiosClient from "../utils/axiosClient";
import toast from "react-hot-toast";
import { SubscriptionPlan } from "../types/plan.type";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

let fetchedPlans: SubscriptionPlan[] | null= null 

const usePlan = () => {
    const [ plans, setPlans ] = React.useState<SubscriptionPlan[]>([]);
    const [ plan, setPlan ] = React.useState<SubscriptionPlan>({} as SubscriptionPlan);
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isSaving, setIsSaving ] = React.useState(false);

    const { id } = useParams();
    const { user, handleSetUser } = useAppContext();
    const navigate = useNavigate();

    const getPlans = async () => {
        try {
            setIsLoading(true);

            if(fetchedPlans) {
                setPlans(fetchedPlans);
                return fetchedPlans;
            }

            const { data: response } = await axiosClient.get('/plan');

            setPlans(response.data);
            fetchedPlans = response.data;
            return response.data as SubscriptionPlan[];

        } catch(error) {
            toast.error(error.message);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const getPlan = async () => {
        try {
            setIsLoading(true);

            const plans = await getPlans();
            const plan = plans.filter(item => item.id === id)[0];

            if(!plan) {
                navigate(-1);
            }

            setPlan(plan);

        } catch(error) {
            // console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubscribe = async () => {
        try {
            setIsSaving(true);

            if (!id) throw new Error('Plan ID is required');

            await axiosClient.post(`/plan/subscribe/${id}`);

            handleSetUser({
                ...user!,
                planID: id,
                username: plan.features?.getVerifiedBadge ? user!.username.replace("plucker_", "") : user!.username,

            })
            navigate('/UpgradeSuccessful');

        } catch(error) {
           toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    React.useEffect(() => {
        if(!id) getPlans();
        if(id) getPlan();
    }, []);

    return {
        isLoading,
        isSaving,
        plans,
        plan,
        handleSubscribe,
    }
}

export default usePlan;