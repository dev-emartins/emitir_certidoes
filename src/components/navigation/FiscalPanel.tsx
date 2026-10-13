import { useState, type FormEvent } from 'react'
import {
  IdCard,
  Landmark,
  MapPin,
  Gavel,
  Briefcase,
  Building2,
  UserCheck,
  User,
  ChartLine,
  ExternalLink,
  Search,
  Scale,
  CheckCircle,
} from 'lucide-react'
import { Card, Input, Select, ErrorMessage, Button, LinkButton } from '../ui/'
import { estados, stateUrls } from '../../data/states'

export function FiscalPanel() {
  const [estado, setEstado] = useState('')
  const [estadoError, setEstadoError] = useState(false)
  const [loadingEstadual, setLoadingEstadual] = useState(false)
  const [cityName, setCityName] = useState('')
  const [cityError, setCityError] = useState(false)
  const [loadingCity, setLoadingCity] = useState(false)
  const [shakeCity, setShakeCity] = useState(false)

  const emitirCertidaoEstadual = () => {
    if (!estado) {
      setEstadoError(true)
      return
    }
    setEstadoError(false)
    const url = stateUrls[estado]
    if (!url) {
      alert(
        `🔔 Link para emissão no estado ${estado} não encontrado. Acesse o site da SEFAZ diretamente.`,
      )
      return
    }
    setLoadingEstadual(true)
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setLoadingEstadual(false)
    }, 200)
  }

  const searchCityCertificate = (e?: FormEvent) => {
    e?.preventDefault()
    const trimmed = cityName.trim()
    if (!trimmed) {
      setCityError(true)
      setShakeCity(true)
      setTimeout(() => setShakeCity(false), 400)
      return
    }
    setCityError(false)
    const formatted = trimmed.replace(/\b\w/g, (l) => l.toUpperCase())
    const searchQuery = `"Prefeitura de ${formatted}" "certidão negativa" OR "regularidade fiscal municipal"`
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
    setLoadingCity(true)
    setTimeout(() => {
      window.open(googleUrl, '_blank')
      setLoadingCity(false)
    }, 250)
  }

  return (
    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
      {/* Situação Cadastral */}
      <Card
        icon={<IdCard className="w-6 h-6" />}
        title="Situação Cadastral"
        description="Consulta CPF e CNPJ na base da Receita Federal. Emita seu comprovante atualizado."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton
            href="https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp"
            variant="slate"
            tip="Consulta pública de CPF"
            icon={<UserCheck className="w-4 h-4" />}
          >
            CPF
          </LinkButton>
          <LinkButton
            href="https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_Solicitacao.asp"
            variant="slate"
            tip="Consulta Cadastro CNPJ"
            icon={<Building2 className="w-4 h-4" />}
          >
            CNPJ
          </LinkButton>
        </div>
      </Card>

      {/* Certidão Negativa Federal */}
      <Card
        icon={<Landmark className="w-6 h-6" />}
        title="Certidão Negativa Federal"
        description="Certidão conjunta de débitos relativos a tributos federais e dívida ativa da União."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton
            href="https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cpf"
            tip="Emitir para Pessoa Física"
            icon={<User className="w-4 h-4" />}
          >
            PF
          </LinkButton>
          <LinkButton
            href="https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cnpj"
            tip="Emitir para Pessoa Jurídica"
            icon={<ChartLine className="w-4 h-4" />}
          >
            PJ
          </LinkButton>
        </div>
      </Card>

      {/* Certidão Estadual */}
      <Card
        icon={<MapPin className="w-6 h-6" />}
        title="Certidão Negativa Estadual"
        description="Regularidade perante o ICMS e demais tributos estaduais. Selecione a UF desejada."
      >
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <Select
            options={estados}
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value)
              if (estadoError) setEstadoError(false)
            }}
            placeholder="-- Escolha o estado --"
            aria-label="Selecione um estado"
            className="md:w-[70%]"
          />
          <Button
            onClick={emitirCertidaoEstadual}
            loading={loadingEstadual}
            loadingText="Redirecionando..."
            tip="Acessar SEFAZ"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Emitir
          </Button>
        </div>
        {estadoError && (
          <ErrorMessage>Selecione um estado antes de continuar.</ErrorMessage>
        )}
      </Card>

      {/* Certidão Trabalhista */}
      <Card
        icon={<Gavel className="w-6 h-6" />}
        title="Certidão Negativa Trabalhista"
        description="Certifica inexistência de débitos trabalhistas perante a Justiça do Trabalho. PF/PJ."
      >
        <LinkButton
          href="https://cndt-certidao.tst.jus.br/gerarCertidao.faces"
          variant="emerald"
          tip="Emitir no site do TST"
          icon={<Scale className="w-4 h-4" />}
        >
          Emitir CNDT
        </LinkButton>
      </Card>

      {/* FGTS Regularidade */}
      <Card
        icon={<Briefcase className="w-6 h-6" />}
        title="Regularidade do Empregador"
        description="Consulta CRF – Certidão de Regularidade do FGTS. Exclusiva para CNPJ."
      >
        <LinkButton
          href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
          variant="amber"
          tip="Consultar no site da Caixa"
          icon={<CheckCircle className="w-4 h-4" />}
        >
          Consultar CRF
        </LinkButton>
      </Card>

      {/* Certidão Municipal */}
      <Card
        icon={<Building2 className="w-6 h-6" />}
        title="Certidão Negativa Municipal"
        description="Tributos como ISS e IPTU. Emita diretamente no site da prefeitura da sua cidade."
      >
        <form onSubmit={searchCityCertificate} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value)
                if (cityError) setCityError(false)
              }}
              placeholder="Ex: Recife, Fortaleza."
              autoComplete="off"
              shake={shakeCity}
              error={cityError}
              className="md:w-[70%]"
            />
            <Button
              type="submit"
              loading={loadingCity}
              loadingText="Buscando..."
              tip="Buscar prefeitura"
              icon={<Search className="w-4 h-4" />}
            >
              Buscar
            </Button>
          </div>
          {cityError && (
            <ErrorMessage variant="info">Digite o nome da sua cidade.</ErrorMessage>
          )}
        </form>
      </Card>
    </div>
  )
}
