import { lazy, Suspense } from 'react'
import { PageLayout } from './components/Layout'
import { Seo } from './components/Seo'
import { Button } from './components/Button'
import { publishedProjects } from './data/projects'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Projects = lazy(() => import('./pages/Projects').then((module) => ({ default: module.Projects })))
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })))
const Process = lazy(() => import('./pages/Process').then((module) => ({ default: module.Process })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((module) => ({ default: module.ProjectDetail })))

export function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = (() => {
    if (path === '/') return <Home />
    if (path === '/projects') return <Projects />
    if (path === '/services') return <Services />
    if (path === '/process') return <Process />
    if (path === '/about') return <About />
    if (path === '/contact') return <Contact />
    const possibleProject = path.startsWith('/projects/') ? publishedProjects.find((project) => `/projects/${project.slug}` === path) : undefined
    if (possibleProject) return <ProjectDetail project={possibleProject} />
    return <PageLayout><Seo title="Page not found" description="The requested page could not be found." /><section className="not-found shell"><p className="eyebrow">404</p><h1>This page is not available.</h1><p>The page may be awaiting publication or the address may have changed.</p><Button href="/">Return home</Button></section></PageLayout>
  })()
  return <Suspense fallback={<div className="route-loading" aria-live="polite">Loading page</div>}>{page}</Suspense>
}
