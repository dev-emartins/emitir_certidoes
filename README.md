# Emitir Certidões

Landing page em **Vite + React + TypeScript + Tailwind CSS 4 + Lucide Icons** para emissão centralizada de certidões fiscais e jurídicas.

## Como rodar

```bash
cd certidoes-react
npm install
npm run dev
```

## Estrutura de componentes

```
src/
├── App.tsx                        # Orquestra tabs e layout
├── assets/                        # Armazena as imagens do projeto
│   └── logo.png
├── components/
│   ├── layout/
│   │   ├── Footer.tsx             # Rodapé com selos de confiança
│   │   └── Hero.tsx               # Cabeçalho com logo e título
│   ├── layout/
│   │   ├── layout/
│   │   ├── Tabs.tsx               # Navegação entre abas             
│   │   ├── FiscalPanel.tsx        # Grid de cards fiscais + lógica
│   │   └── JuridicalPanel.tsx     # Grid de cards jurídicos
│   └── ui/
│       ├── Button.tsx             # Button + LinkButton (variantes)
│       ├── Input.tsx              # Input de texto
│       ├── Select.tsx             # Select com options
│       ├── Card.tsx               # Card reutilizável (ícone, título, desc)
│       └── ErrorMessage.tsx       # Mensagem de erro/info
├── data/
│   └── states.ts                  # UFs + URLs das SEFAZ
└── index.css                      # Tailwind + animações + tooltips
```

## Scripts

| Comando           | Descrição                    |
|-------------------|------------------------------|
| `npm run dev`     | Servidor de desenvolvimento  |
| `npm run build`   | Build de produção            |
| `npm run preview` | Preview do build             |

## Stack

- Vite 7
- React 19
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Lucide React

## Licença
Este projeto está licenciado sob a [GNU General Public License v3.0](LICENSE).
