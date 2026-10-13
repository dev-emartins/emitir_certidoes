import type { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly SelectOption[]
  placeholder?: string
}

export function Select({
  options,
  placeholder = '-- Selecione --',
  className = '',
  ...props
}: SelectProps) {
  return (
    <select
      className={`flex-1 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium cursor-pointer focus:ring-2 focus:ring-cyan-300 transition ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
