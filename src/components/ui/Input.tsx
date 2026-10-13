import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  shake?: boolean
}

export function Input({ error, shake, className = '', ...props }: InputProps) {
  return (
    <input
      className={`flex-1 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm focus:ring-2 focus:ring-cyan-300 transition ${
        shake ? 'error-shake' : ''
      } ${error ? 'border-red-300' : ''} ${className}`}
      {...props}
    />
  )
}
