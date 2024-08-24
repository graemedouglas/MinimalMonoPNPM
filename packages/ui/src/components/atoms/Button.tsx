import React from 'react'

type ButtonProps = {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md">
      {children}
    </button>
  )
}

export default Button
