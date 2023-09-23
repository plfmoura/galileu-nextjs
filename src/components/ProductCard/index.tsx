import React from 'react'

type ProductCardProps = {
  image?: string,
  name: string,
  price: number,
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className='product-card-container'>
      <p className="product-card-name">{ name }</p>
      <span className="product-card-price">{ price }</span>
    </div>
  )
}
