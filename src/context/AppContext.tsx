import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";
import axiosClient from "../utils/axiosClient";
import Loading from "../components/Loading";
import { Game } from "../types/game.type";

interface AppContextType {
    user: User | null;
    accountVerifyEmail: string;
    currentGameDetails: Game;
    handleSetUser: (user: User) => void;
    handleLogout: () => void;
    setAccountVerifyEmail: React.Dispatch<React.SetStateAction<string>>;
    setCurrentGameDetails: React.Dispatch<React.SetStateAction<Game>>;
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [ user, setUser ] = React.useState<User>({} as User);
    const [ isLoading, setLoading ] = React.useState(true);
    const [ accountVerifyEmail, setAccountVerifyEmail ] = React.useState('');
    const [ currentGameDetails, setCurrentGameDetails ] = React.useState<Game>({} as Game);

    const navigate = useNavigate();

    const persistStorage = (key: string, value: unknown) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    const getPersistedStorage = (key: string): unknown => {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    };

    const removePersistentStorage = (key: string) => {
        sessionStorage.removeItem(key);
    };

    const handleSetUser = (user: User) => {
        setUser(user);
        persistStorage("user", user);
    };

    const handleLogout = () => {
        setUser({} as User);
        removePersistentStorage("user");
        navigate("/");
    }

    const contextValue: AppContextType = {
        user,
        accountVerifyEmail,
        currentGameDetails,
        handleSetUser,
        handleLogout,
        setAccountVerifyEmail,
        setCurrentGameDetails,
    };

    const init = async () => {
         try {
            const authToken = localStorage.getItem('authToken');
            if(authToken) {
                const { status, data: response } = await axiosClient.get('user');
                if(status === 200) {
                    handleSetUser(response.data)
                }
            }
           
        } catch(error) {

        }

        // const storedUser = getPersistedStorage("user") as User | null;

        // if (!storedUser) {
        //     setLoading(false);
        //     navigate("/signin");
        //     return;
        // }

        // setUser(storedUser);
        setLoading(false);
    };

    React.useEffect(() => {
        init();
    }, []);

    return (
        <AppContext.Provider value={contextValue}>
            {isLoading ? <Loading/> : children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }

    return context;
};

export default AppContextProvider;
