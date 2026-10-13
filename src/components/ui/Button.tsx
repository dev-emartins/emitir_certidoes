import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

type Variant = 'slate' | 'blue' | 'emerald' | 'amber' | 'indigo'

const variantClasses: Record<Variant, string> = {
  slate: 'bg-slate-800 hover:bg-slate-700',
  blue: 'bg-blue-800 hover:bg-blue-700',
  emerald: 'bg-emerald-700 hover:bg-emerald-600',
  amber: 'bg-amber-700 hover:bg-amber-600',
  indigo: 'bg-indigo-800 hover:bg-indigo-700',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  loading?: boolean
  loadingText?: string
  tip?: string
  icon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'blue',
  loading = false,
  loadingText = 'Carregando...',
  tip,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      data-tip={tip}
      className={`inline-flex items-center justify-center gap-2 text-white font-semibold py-2.5 px-6 rounded-full text-sm transition shadow-sm disabled:opacity-70 btn-tooltip ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  )
}

interface LinkButtonProps {
  href: string
  variant?: Variant
  tip?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export function LinkButton({
  href,
  variant = 'blue',
  tip,
  icon,
  children,
  className = '',
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-tip={tip}
      className={`inline-flex items-center gap-2 text-white font-semibold py-2.5 px-5 rounded-full text-sm transition shadow-sm btn-tooltip ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  )
}
