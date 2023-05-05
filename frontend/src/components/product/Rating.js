import React from "react";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const Rating = ({ value, text }) => {
  return (
    <>
      <div className="flex flex-row">
        <span>
          {value >= 1 ? (
            <BsStarFill color="FDCC0D" fontSize={20} />
          ) : value >= 0.5 ? (
            <BsStarHalf color="FDCC0D" fontSize={20} />
          ) : (
            <BsStar color="FDCC0D" fontSize={20} />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <BsStarFill color="FDCC0D" fontSize={20} />
          ) : value >= 1.5 ? (
            <BsStarHalf color="FDCC0D" fontSize={20} />
          ) : (
            <BsStar color="FDCC0D" fontSize={20} />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <BsStarFill color="FDCC0D" fontSize={20} />
          ) : value >= 2.5 ? (
            <BsStarHalf color="FDCC0D" fontSize={20} />
          ) : (
            <BsStar color="FDCC0D" fontSize={20} />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <BsStarFill color="FDCC0D" fontSize={20} />
          ) : value >= 3.5 ? (
            <BsStarHalf color="FDCC0D" fontSize={20} />
          ) : (
            <BsStar color="FDCC0D" fontSize={20} />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <BsStarFill color="FDCC0D" fontSize={20} />
          ) : value >= 4.5 ? (
            <BsStarHalf color="FDCC0D" fontSize={20} />
          ) : (
            <BsStar color="FDCC0D" fontSize={20} />
          )}
        </span>
      </div>
      <span>{text && text}</span>
    </>
  );
};

export default Rating;
