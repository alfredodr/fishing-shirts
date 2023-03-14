import React from 'react'

const Variants = ({image}) => {
  return (
    <div className="overflow-hidden ">
        <img 
          src={image.src}
          alt={image.alt}
        />
    </div>
  )
}

export default Variants