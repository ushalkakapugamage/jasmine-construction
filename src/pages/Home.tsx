import { Button } from '../components/Button'
import { PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import { ArrowUpRight } from '../components/Icons'
import { getSiteUrl, processOutline, site } from '../data/site'
import { publishedProjects } from '../data/projects'
import { sitePath } from '../lib/routes'

const image = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
const heroImage = image('photo-1487958449943-2429e8be8625', 2200)

const architectureFrames = [
  { image: image('photo-1542621334-a254cf47733d'), eyebrow: 'PROJECT ARCHIVE', title: 'Verified work, told in detail.' },
  { image: image('photo-1511818966892-d7d671e672a2'), eyebrow: 'PROJECT ARCHIVE', title: 'A record for every project.' },
  { image: image('photo-1518005020951-eccb494ad742'), eyebrow: 'PROJECT ARCHIVE', title: 'Real sites. Clear context.' },
]

export function Home() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: getSiteUrl(),
    email: site.email, telephone: site.phones[0], identifier: [{ '@type': 'PropertyValue', name: 'CIDA registration', value: site.cidaRegistration }, { '@type': 'PropertyValue', name: 'Business registration', value: site.registration }],
  }
  return <PageLayout headerDark>
    <Seo description="Jasmin Constructions — a professional starting point for construction projects in Sri Lanka." schema={schema} />
    <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,46,91,.95) 0%, rgba(8,46,91,.76) 47%, rgba(23,33,43,.38) 100%), url(${heroImage})` }}>
      <div className="shell home-hero__content">
        <p className="eyebrow eyebrow--light">Jasmin Constructions · Sri Lanka</p>
        <h1>Built with care.<br /><em>Made to <span>last.</span></em></h1>
        <p className="home-hero__lede">A clear, considered starting point for projects that demand thoughtful construction.</p>
        <div className="hero-actions"><Button href={sitePath('/projects')}>Explore projects</Button><Button href={sitePath('/contact')} variant="line">Start your project</Button></div>
      </div>
      <a href="#introduction" className="scroll-prompt"><span>Scroll to explore</span><i /></a>
      <p className="hero-image-note">Illustrative architecture image — verified project photography to be added before launch.</p>
    </section>

    <section className="credentials-band" aria-label="Company credentials">
      <div className="shell credentials-band__grid">
        <p className="eyebrow">Established credentials</p>
        <div><strong>CIDA <em>{site.cidaGrade}</em></strong><span>Grade</span></div>
        <div><strong>{site.cidaRegistration}</strong><span>CIDA registration</span></div>
        <div><strong>{site.registration}</strong><span>Business registration</span></div>
      </div>
    </section>

    <section className="intro-section shell" id="introduction">
      <SectionIntro number="01" label="The practice" title="Construction begins long before the first day on site." />
      <div className="intro-section__body"><p className="intro-section__lead">Jasmin Constructions is building a more transparent front door for clients: one that makes it easier to begin the conversation, understand the path ahead, and keep each project record in context.</p><div className="intro-section__aside"><p>Our website is organised around the information that matters — the brief, the process, the work, and the people behind it.</p><Button href={sitePath('/about')} variant="line">About Jasmin</Button></div></div>
    </section>

    <section className="archive-section">
      <div className="shell">
        <SectionIntro number="02" label="Work in focus" title="A project archive built for proof, not promises." text="Verified project records will include the essential context — scope, location, progress and the people involved where publishable." />
        {publishedProjects.length > 0 ? <div className="project-grid">{publishedProjects.slice(0, 3).map((project) => <a className="project-card" href={sitePath(`/projects/${project.slug}`)} key={project.id}><img src={project.coverImage} alt={project.name} loading="lazy" /><span className="project-card__meta">{project.category} · {project.location}</span><h3>{project.name}</h3><ArrowUpRight /></a>)}</div> : <div className="archive-preview">
          {architectureFrames.map((frame, index) => <div className={`archive-frame archive-frame--${index + 1}`} key={frame.image}><img src={frame.image} alt="Illustrative architectural image" loading="lazy" /><div><p>{frame.eyebrow}</p><h3>{frame.title}</h3><span>Awaiting verified project material</span></div></div>)}
        </div>}
        <div className="archive-section__footer"><p>Project names, locations, imagery and scope will appear only after confirmation.</p><Button href={sitePath('/projects')} variant="line">View project archive</Button></div>
      </div>
    </section>

    <section className="approach-section shell">
      <div className="approach-section__image"><img src={image('photo-1565008447742-97f6f38c985c')} alt="Illustrative detail of a structured building facade" loading="lazy" /><span>Architecture · Engineering · Construction</span></div>
      <div className="approach-section__content"><p className="eyebrow">A more considered first step</p><h2>Start with the right questions.</h2><p>Every brief has its own practical context. Share the site, your intent and where you are in the process. We’ll help make the next conversation more focused.</p><Button href={sitePath('/contact')}>Discuss your project</Button></div>
    </section>

    <section className="process-section">
      <div className="shell"><SectionIntro number="03" label="How to begin" title="A clear route from enquiry to next step." /><div className="process-grid">{processOutline.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="process-section__footer"><p>The detailed delivery process will be confirmed and published with Jasmin Constructions’ approved operating information.</p><Button href={sitePath('/process')} variant="line">See the process</Button></div></div>
    </section>

    <section className="closing-cta"><div className="shell closing-cta__inner"><p className="eyebrow eyebrow--light">Start a conversation</p><h2>Planning a project?</h2><p>Tell Jasmin Constructions what you are considering, and make the first step a clear one.</p><div><Button href={sitePath('/contact')} variant="light">Start your project</Button><a className="plain-link" href={`https://wa.me/${site.whatsapp}?text=Hello%20Jasmin%20Constructions%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight /></a></div></div></section>
  </PageLayout>
}
