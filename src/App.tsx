import { useState } from 'react'
import { Hero } from './components/layout/Hero'
import { Footer } from './components/layout/Footer'
import { Tabs, type Tab } from './components/navigation/Tabs'
import { FiscalPanel } from './components/navigation/FiscalPanel'
import { JuridicalPanel } from './components/navigation/JuridicalPanel'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('fiscais')

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/40 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Hero />
        <Tabs active={activeTab} onChange={setActiveTab} />

        {activeTab === 'fiscais' && <FiscalPanel />}
        {activeTab === 'juridicas' && <JuridicalPanel />}

        <Footer />
      </div>
    </div>
  )
}

export default App
