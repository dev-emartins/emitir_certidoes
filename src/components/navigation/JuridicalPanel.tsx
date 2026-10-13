import { Scale, ShieldCheck, ExternalLink } from 'lucide-react'
import { Card, LinkButton } from '../ui/'

export function JuridicalPanel() {
  return (
    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
      <Card
        accent="indigo"
        icon={<Scale className="w-6 h-6" />}
        title="Contas Julgadas Irregulares"
        description="Consulta às contas julgadas irregulares pelo TCU, com informações sobre gestores e sanções."
      >
        <LinkButton
          href="https://sites.tcu.gov.br/contas-julgadas-irregulares/"
          variant="indigo"
          tip="Abrir portal do TCU"
          icon={<ExternalLink className="w-4 h-4" />}
        >
          Acessar
        </LinkButton>
      </Card>

      <Card
        accent="indigo"
        icon={<ShieldCheck className="w-6 h-6" />}
        title="Certidões APF"
        description="Emissão de certidões de apuração de fatos (APF) junto ao TCU, para verificação de regularidade."
      >
        <LinkButton
          href="https://certidoes-apf.apps.tcu.gov.br/"
          variant="indigo"
          tip="Abrir sistema do TCU"
          icon={<ExternalLink className="w-4 h-4" />}
        >
          Acessar
        </LinkButton>
      </Card>
    </div>
  )
}
