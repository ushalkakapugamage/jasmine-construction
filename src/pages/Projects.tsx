import { useState } from 'react'
import { Button } from '../components/Button'
import { PageHero, PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import { ArrowUpRight } from '../components/Icons'
import { publishedProjects } from '../data/projects'

const hero = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=85'

export function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(publishedProjects.map((project) => project.category)))]
  const visible = filter === 'All' ? publishedProjects : publishedProjects.filter((project) => project.category === filter)
  return <PageLayout headerDark><Seo title="Projects" description="A verified project archive from Jasmin Constructions." /><PageHero eyebrow="Project archive" title="Work with a record behind it." text="Each published project will be presented with verified details, relevant scope and original photography." image={hero} />
    <section className="page-section shell"><SectionIntro number="01" label="Verified work" title="Projects in context." text="The archive is intentionally held until project names, photography and information can be verified for publication." />
      <div className="project-toolbar" aria-label="Project category filter"><span>Filter work</span><div>{categories.map((category) => <button onClick={() => setFilter(category)} className={filter === category ? 'is-active' : ''} key={category}>{category}</button>)}</div></div>
      {visible.length ? <div className="project-grid project-grid--archive">{visible.map((project) => <a className="project-card" href={`/projects/${project.slug}`} key={project.id}><img src={project.coverImage} alt={project.name} loading="lazy" /><span className="project-card__meta">{project.category} · {project.location}</span><h2>{project.name}</h2><ArrowUpRight /></a>)}</div> : <EmptyArchive />}
    </section>
    <section className="closing-cta"><div className="shell closing-cta__inner"><p className="eyebrow eyebrow--light">Have a project in mind?</p><h2>Start with a considered brief.</h2><p>We’ll make it simple to share the details that matter.</p><Button href="/contact" variant="light">Start your project</Button></div></section>
  </PageLayout>
}

function EmptyArchive() {
  return <div className="empty-archive"><div className="empty-archive__number">/01</div><div><p className="eyebrow">Archive in preparation</p><h2>Verified project records are being prepared.</h2><p>Jasmin Constructions will add each project only with approved descriptions, images and client information where publishable.</p><Button href="/contact" variant="line">Discuss a similar project</Button></div></div>
}
