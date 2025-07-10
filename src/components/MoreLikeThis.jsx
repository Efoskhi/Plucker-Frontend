import React from "react";

import Pad0 from "../assets/Pad0.png";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Leaf from "../assets/Leaf.png";
import Smile from "../assets/Smile.png";
import useGame from "../hooks/useGame";
import Loading from "./Loading";
import TrendingGames from "./TrendingGames";

const MoreLikeThis = () => {
  const { isLoading, similarGames } = useGame();

  return (
    <div className="py-12">
      <h1 className="inline-flex gap-2 items-center font-grotesk font-bold pb-6">
        More like this <img src={Pad0} />
      </h1>

      {isLoading && <Loading/>}

      <TrendingGames games={similarGames}/>
    </div>
  );
};

export default MoreLikeThis;
