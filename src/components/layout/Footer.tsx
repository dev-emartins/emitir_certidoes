import { Shield, RefreshCw, Lock } from 'lucide-react'

export function Footer() {
  return (
    <div className="mt-14 pt-6 text-center border-t border-slate-200 flex flex-wrap justify-center gap-5 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1">
        <Shield className="w-3.5 h-3.5" /> Fontes oficiais (Receita, SEFAZ, TST, Caixa, TCU)
      </span>
      <span className="inline-flex items-center gap-1">
        <RefreshCw className="w-3.5 h-3.5" /> Dados atualizados em tempo real
      </span>
      <span className="inline-flex items-center gap-1">
        <Lock className="w-3.5 h-3.5" /> Ambiente seguro e confiável
      </span>
    </div>
  )
}
