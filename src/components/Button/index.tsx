import React from 'react'
import './styles.css'

type ButtonProps = {
    variant?: "primary" | "secondary" | "tertiary",
    type: "button" | "submit" | "reset",
    value: string,
    style?: React.CSSProperties
}

export default function Button({ type, value, variant, style }: ButtonProps) {
  return (
    <button type={type} className={`btn ${variant}`} style={style}>
      {value}
    </button>
  )
}
