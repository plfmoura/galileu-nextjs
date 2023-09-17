import React from 'react'

type CardProps = {
  image: string; 
  value: string
};

export default function Card({ 
  image, 
  value, 
}: CardProps) {
  return (
    <div 
    className='card-container' 
    style={{
      backgroundImage: `url(${image})`
    }}
    >
     <button>{value}</button> 
    </div>
  )
}
