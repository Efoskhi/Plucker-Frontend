import React from "react";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Faces from "../../assets/Faces.png"; // Replace with your actual logo

import Strike from "../../assets/Strike.png"; // Replace with your actual logo

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

import Level from "../../assets/Level.png"; // Replace with your actual logo

import Smile from "../../assets/Smile.png";
import Card from "../../components/Submission/Card";
import useGamePlay from "../../hooks/useGamePlay";
import Loading from "../../components/Loading";
import EmptySubmissions from "./EmptySubmissions";

const Submissions = () => {
  const [ isLoading, setIsLoading ] = React.useState(true);
  const [ submissions, setSubmissions ] = React.useState([]);
  const { getPlayedGame } = useGamePlay();

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const games = await getPlayedGame();
      setSubmissions(games.data);
      setIsLoading(false);
    })()
  }, [])

  if(!isLoading && !submissions.length) {
    return <EmptySubmissions/>
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-24"
      />
      <img
        src={Level}
        alt=""
        className="absolute  flex items-end justify-end  -z-10 right-0 top-40"
      />
      <img
        src={Faces}
        alt=""
        className="absolute right-0 bottom-0 flex  mx-auto -z-10 "
      />
      <img src={Strike} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20">
        <div className="w-full  pt-40 lg:px-24 px-6 text-white">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                <span className="text-white">📝 My Submissions</span>{" "}
              </h1>
            </div>
          </div>

          {isLoading && <Loading/>}

          <div className="grid lg:grid-cols-3 grid-cols-1 pt-12 gap-4">
            {submissions.map((item, key) => (
              <Card key={key} submission={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
