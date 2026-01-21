import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryBtn = ({className, children, onClick, style, to}) => {
  return (
      <button style={style} className={`mt-8 cursor-pointer  text-black font-bold px-8 py-3 rounded-xl  transition ${className}`} onClick={onClick}>
      <Link to={to}>{children}</Link>
    </button>
  )
}

export default PrimaryBtn