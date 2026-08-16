import { Button } from '../components/Button'
import { PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import type { Project } from '../data/projects'
import { getSiteUrl } from '../data/site'

export function ProjectDetail({ project }: { project: Project }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.description,
    image: [project.coverImage, ...project.gallery], url: getSiteUrl(`/projects/${project.slug}`),
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: getSiteUrl() }, { '@type': 'ListItem', position: 2, name: 'Projects', item: getSiteUrl('/projects') }, { '@type': 'ListItem', position: 3, name: project.name }] },
  }
  return <PageLayout headerDark><Seo title={project.seo.title} description={project.seo.description} schema={schema} />
    <section className="project-detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,46,91,.96), rgba(23,33,43,.38)), url(${project.coverImage})` }}><div className="shell"><p className="eyebrow eyebrow--light">{project.category} · {project.location}</p><h1>{project.name}</h1><p>{project.description}</p></div></section>
    <article><section className="project-facts shell" aria-label="Project details"><div><span>Location</span><strong>{project.location}</strong></div><div><span>Category</span><strong>{project.category}</strong></div><div><span>Year</span><strong>{project.year}</strong></div><div><span>Project status</span><strong>{project.status.replace('-', ' ')}</strong></div></section>
      <section className="page-section shell"><SectionIntro number="01" label="Scope of work" title="The brief, recorded with precision." /><div className="project-scope"><p>{project.description}</p><ul>{project.scope.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      {project.constructionStages.length > 0 && <section className="project-journey"><div className="shell"><SectionIntro number="02" label="Project journey" title="Progress in context." /><div className="journey-grid">{project.constructionStages.map((stage, index) => <article key={stage.title}>{stage.image && <img src={stage.image} alt={`${project.name} — ${stage.title}`} loading="lazy" />}<span>0{index + 1}</span><h3>{stage.title}</h3><p>{stage.description}</p></article>)}</div></div></section>}
      {project.gallery.length > 0 && <section className="project-gallery shell"><SectionIntro number="03" label="Project gallery" title="Details of the completed work." /><div>{project.gallery.map((image, index) => <img src={image} key={image} alt={`${project.name} project detail ${index + 1}`} loading="lazy" />)}</div></section>}
      <section className="project-related shell"><p className="eyebrow">Related services</p><div>{project.services.map((service) => <a href="/services" key={service}>{service}<span>↗</span></a>)}</div></section>
    </article>
    <section className="closing-cta"><div className="shell closing-cta__inner"><p className="eyebrow eyebrow--light">A similar project?</p><h2>Start with your brief.</h2><p>Tell us about the location, stage and outcome you are considering.</p><Button href="/contact" variant="light">Start your project</Button></div></section>
  </PageLayout>
}
