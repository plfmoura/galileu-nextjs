import React from 'react'
import './styles.css'
import Image from 'next/image';

type CardProps = {
  image: any;
  value: string,
  children?: React.ReactNode
};

export default function Card({
  image,
  value,
  children
}: CardProps) {
  return (
    <div className='card-container'>
      <Image
        src={image}
        alt={value}
        className='card-image'
        loading='lazy'
      />
      <div className="card-image-overlay"></div>
      <span>{value}</span>
      {children}
    </div>
  )
}
