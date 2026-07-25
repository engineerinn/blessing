import { Approach } from './components/Approach'
import { Contact } from './components/Contact'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Services } from './components/Services'
import { TrustStrip } from './components/TrustStrip'
import { ValueProps } from './components/ValueProps'
import { WhatWeBuild } from './components/WhatWeBuild'
import { Why } from './components/Why'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

function App() {
  useRevealOnScroll()

  return (
    <div className="adno">
      <Nav />
      <Hero />
      <TrustStrip />
      <ValueProps />
      <Services />
      <Why />
      <Approach />
      <WhatWeBuild />
      <CtaBand />
      <Contact />
      <Footer />
    </div>
  )
}

export default App