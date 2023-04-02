import React from "react"
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Rating = ({value, text}) => {
  return (
    <IconContext.Provider value={{   style: { color: "FDCC0D", fontSize: "20px" }  }}>
        <div className="flex flex-row">
            <span>
                {value>=1 ? <BsStarFill/> : value >=0.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                {value>=2 ? <BsStarFill/> : value >=1.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                {value>=3 ? <BsStarFill/> : value >=2.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                {value>=4 ? <BsStarFill/> : value >=3.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                {value>=5 ? <BsStarFill/> : value >=4.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
        </div>
        <span>{text && text}</span>
    </IconContext.Provider>
  )
}

export default Rating