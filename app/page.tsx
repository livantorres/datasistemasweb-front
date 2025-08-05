// src/app/page.tsx
'use client'

import { ModeToggle } from "./components/Button"
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import Stats from './components/Stats'
import Features from './components/Features'
import Faqs from './components/Faqs'
//import Footer from './components/Footer'
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <Stats />
        <Features />
        <Faqs />
      </main>
     {/*} <Footer />*/}
    </div>
  )
}

