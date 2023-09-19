import React from 'react'
import './styles.css'

type ButtonProps = {
    variant?: "primary" | "secondary" | "tertiary",
    type: "button" | "submit" | "reset",
    value: string,
    style?: React.CSSProperties,
    onPress?: React.MouseEventHandler
}

export default function Button({ type, value, variant, style, onPress }: ButtonProps) {
  return (
    <button type={type} onClick={onPress} className={`btn ${variant}`} style={style}>
      {value}
    </button>
  )
}
