import React from "react"
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Rating = ({value, text}) => {
  return (
    <IconContext.Provider value={{ color: "FDCC0D", className: "global-class-name" }}>
        <div className="flex flex-row">
            <span>
                {value>=1 ? <BsStarFill className="mr-1 text-xl"/> : value >=0.5 ? <BsStarHalf className="mr-1 text-xl"/> : <BsStar className="mr-1 text-xl"/>}
            </span>
            <span>
                {value>=2 ? <BsStarFill className="mr-1 text-xl"/> : value >=1.5 ? <BsStarHalf className="mr-1 text-xl"/> : <BsStar className="mr-1 text-xl"/>}
            </span>
            <span>
                {value>=3 ? <BsStarFill className="mr-1 text-xl"/> : value >=2.5 ? <BsStarHalf className="mr-1 text-xl"/> : <BsStar className="mr-1 text-xl"/>}
            </span>
            <span>
                {value>=4 ? <BsStarFill className="mr-1 text-xl"/> : value >=3.5 ? <BsStarHalf className="mr-1 text-xl"/> : <BsStar className="mr-1 text-xl"/>}
            </span>
            <span>
                {value>=5 ? <BsStarFill className="mr-1 text-xl"/> : value >=4.5 ? <BsStarHalf className="mr-1 text-xl"/> : <BsStar className="mr-1 text-xl"/>}
            </span>
        </div>
        <span>{text && text}</span>
    </IconContext.Provider>
  )
}

export default Rating