import React from "react";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed
import logo from "../../assets/Logo.png"; // Replace with your actual logo

import MailBox from "../../assets/Mailbox.png"; // Replace with your actual logo
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const ValidateEmail = ({ isVerifyEmail }) => {
    const { token } = useParams();
    const [ error, setError ] = React.useState('');
    const { handleVerifyEmail, handleValidateUser } = useAuth();

    const navigate = useNavigate();

    const validate = async () => {
        try {
            if(isVerifyEmail) {
              await handleVerifyEmail(token);
              navigate('/');

            } else {
              await handleValidateUser(token);
            }
        } catch(error) {
            setError(error.message);
        }
    }

    React.useEffect(() => {
        validate();
    }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 relative"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <div className="w-full max-w-md text-center space-y-6 ">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 absolute top-4 lg:left-32 left-8"
          />
        </Link>
        <div>
          {error ? (
            <p>{error}</p> 
          ) : (
            <h1 className="text-2xl font-bold" style={{ fontFamily: "grotesk" }}>
                <Loading/>
                <span
                role="img"
                aria-label="email"
                className="inline-flex items-center"
                >
                Validating
                </span>{" "}
            </h1>
        )}
         
        </div>
      </div>
    </div>
  );
};

export default ValidateEmail;
