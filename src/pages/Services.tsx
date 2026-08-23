import { Button } from '../components/Button'
import { PageHero, PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import { publishedServices } from '../data/site'
import { sitePath } from '../lib/routes'

const hero = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85'

export function Services() {
  return <PageLayout headerDark><Seo title="Services" description="Construction service information from Jasmin Constructions." /><PageHero eyebrow="Services" title="The right scope starts with the right brief." text="Share what you are planning and we can establish the information needed for a focused conversation." image={hero} />
    <section className="page-section shell"><SectionIntro number="01" label="A project-led approach" title="Every service conversation begins with context." text="Project scope, site conditions, documentation and timing affect what needs to happen next. A concise brief helps establish the most useful path forward." />
      <div className="service-paths"><article><span>01</span><h3>Your objective</h3><p>Describe what you need to achieve, whether you are starting fresh or adapting an existing space.</p></article><article><span>02</span><h3>Your starting point</h3><p>Tell us about the site, plans, existing structure and the current stage of decision-making.</p></article><article><span>03</span><h3>Your practical needs</h3><p>Share the timeframe, project location and other considerations that will shape the conversation.</p></article></div>
    </section>
    <section className="service-register"><div className="shell"><p className="eyebrow eyebrow--light">Service register</p><h2>Approved service information<br />will be added here.</h2><p>Specific service categories are being reviewed with Jasmin Constructions before public publication. This protects clients from relying on generic or unverified scope claims.</p>{publishedServices.length > 0 && <ul>{publishedServices.map((service) => <li key={service.id}>{service.name}</li>)}</ul>}<Button href={sitePath('/contact')} variant="light">Tell us what you need</Button></div></section>
  </PageLayout>
}
