import { FileText, Gavel } from 'lucide-react'

export type Tab = 'fiscais' | 'juridicas'

interface TabsProps {
  active: Tab
  onChange: (tab: Tab) => void
}

const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
  { id: 'fiscais', label: 'Certidões Fiscais', icon: FileText },
  { id: 'juridicas', label: 'Certidões Jurídicas', icon: Gavel },
]

export function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`px-5 py-2 text-sm font-medium transition-all duration-200 border-b-[3px] ${
              active === id
                ? 'border-[#1e3a6f] text-[#0a2b44] font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon className="inline-block w-4 h-4 mr-2 -mt-0.5" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
