import Nav from './components/Nav'
import Hero from './components/Hero'
import Portrait from './components/Portrait'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <div className="layout-shell">
        <main className="layout-main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
          <Footer />
        </main>
        <Portrait />
      </div>
    </>
  )
}
