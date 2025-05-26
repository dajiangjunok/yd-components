import React from 'react'
// import cn from 'classnames'
import './button.css'

import { cva } from 'class-variance-authority'

const buttonClassnames = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    variant: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent'],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-lg', 'py-3', 'px-6']
    },
    // `boolean` variants are also supported!
    disabled: {
      false: null,
      true: ['opacity-50', 'cursor-not-allowed']
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      disabled: false,
      class: 'hover:bg-blue-600'
    },
    {
      variant: 'secondary',
      disabled: false,
      class: 'hover:bg-gray-100'
    },
    {
      variant: 'primary',
      size: 'medium',
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
      class: 'uppercase'
    }
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    disabled: false
  }
})

export interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** Is this the principal call to action on the page? */
  variant?: "primary" | "secondary"  
  /** How large should the button be? */
  size?: 'small' | 'medium'  | 'large'
  /** Button contents */
  children: React.ReactNode
  /** Optional click handler */
  onClick?: () => void
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = "primary",
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  
  return (
    <button
      type="button"
      className={buttonClassnames({variant, size})}
      {...props}
    >
      {children}
    </button>
  )
}
