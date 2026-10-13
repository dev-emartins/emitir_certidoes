import type { ReactNode } from 'react'

type Accent = 'sky' | 'indigo'

const accentMap = {
  sky: {
    iconBg: 'bg-sky-100 text-sky-700',
    border: 'border-sky-200',
  },
  indigo: {
    iconBg: 'bg-indigo-100 text-indigo-700',
    border: 'border-indigo-200',
  },
}

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  accent?: Accent
  children: ReactNode
}

export function Card({
  icon,
  title,
  description,
  accent = 'sky',
  children,
}: CardProps) {
  const colors = accentMap[accent]

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-white/60 p-6 flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors.iconBg}`}
        >
          {icon}
        </div>
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <p
        className={`text-slate-500 text-sm border-l-[3px] ${colors.border} pl-3 mb-5`}
      >
        {description}
      </p>
      <div className="mt-auto">{children}</div>
    </div>
  )
}
