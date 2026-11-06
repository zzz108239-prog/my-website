import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'

import { SiteFooter } from './components/studio/SiteFooter'
import { SiteHeader } from './components/studio/SiteHeader'
import { articles, projects } from './data/site'
import About from './pages/About'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Journal from './pages/Journal'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Work from './pages/Work'

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="flex h-full flex-col overflow-hidden bg-paper text-ink">
      <SiteHeader />
      <main ref={mainRef} className="studio-scroll flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/yunqi-tea" element={<ProjectDetail project={projects[0]} />} />
          <Route path="/work/beilu-app" element={<ProjectDetail project={projects[1]} />} />
          <Route path="/work/salt-magazine" element={<ProjectDetail project={projects[2]} />} />
          <Route path="/work/hillside-hotel" element={<ProjectDetail project={projects[3]} />} />
          <Route path="/work/grain-bakery" element={<ProjectDetail project={projects[4]} />} />
          <Route path="/work/arc-fitness" element={<ProjectDetail project={projects[5]} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/quiet-brand" element={<ArticleDetail article={articles[0]} />} />
          <Route path="/journal/grid-rhythm" element={<ArticleDetail article={articles[1]} />} />
          <Route path="/journal/design-system-legacy" element={<ArticleDetail article={articles[2]} />} />
          <Route path="/journal/working-with-clients" element={<ArticleDetail article={articles[3]} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SiteFooter />
      </main>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'border border-paper-line bg-white text-ink',
        }}
      />
    </div>
  )
}
