'use client'

import { useEffect } from 'react'
import BackgroundEffects from './components/BackgroundEffects'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import WhyNowSection from './components/WhyNowSection'
import AICapabilitiesSection from './components/AICapabilitiesSection'
import TransformationSection from './components/TransformationSection'
import FeaturesSection from './components/FeaturesSection'
import InstructorsSection from './components/InstructorsSection'
import LiveStreamingSection from './components/LiveStreamingSection'
import CTAMiddleSection from './components/CTAMiddleSection'
import PricingSection from './components/PricingSection'
import CurriculumSection from './components/CurriculumSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ProcessSection from './components/ProcessSection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const loadScripts = async () => {
      const mainScript = document.createElement('script')
      mainScript.src = '/js/main.js'
      mainScript.async = true
      document.body.appendChild(mainScript)

      mainScript.onload = () => {
        const animationsScript = document.createElement('script')
        animationsScript.src = '/js/animations.js'
        animationsScript.async = true
        document.body.appendChild(animationsScript)
      }
    }

    loadScripts()

    return () => {
      const scripts = document.querySelectorAll('script[src*="/js/"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  return (
    <>
      <BackgroundEffects />
      <Header />
      <HeroSection />
      <ProblemSection />
      <WhyNowSection />
      <AICapabilitiesSection />
      <TransformationSection />
      <FeaturesSection />
      <InstructorsSection />
      <LiveStreamingSection />
      <CTAMiddleSection />
      <PricingSection />
      <CurriculumSection />
      <CaseStudiesSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </>
  )
}