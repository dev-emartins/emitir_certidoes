import type { ReactNode } from 'react'
import { AlertCircle, Info } from 'lucide-react'

interface ErrorMessageProps {
  children: ReactNode
  variant?: 'error' | 'info'
}

export function ErrorMessage({ children, variant = 'error' }: ErrorMessageProps) {
  const Icon = variant === 'error' ? AlertCircle : Info

  return (
    <div
      className={`text-xs mt-2 flex items-center gap-1 ${
        variant === 'error' ? 'text-red-500' : 'text-red-500'
      }`}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {children}
    </div>
  )
}
