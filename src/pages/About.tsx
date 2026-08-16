import { Button } from '../components/Button'
import { PageHero, PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

const hero = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=85'

export function About() {
  return <PageLayout headerDark><Seo title="About" description="Company and credential information for Jasmin Constructions." /><PageHero eyebrow="About Jasmin" title="A company record built on the facts." text="We are building this public profile deliberately: with verified credentials, approved company information and work that can speak for itself." image={hero} />
    <section className="page-section shell"><SectionIntro number="01" label="Company profile" title="Professional trust starts with clear information." /><div className="about-intro"><p className="about-intro__lead">Jasmin Constructions is a Sri Lankan construction company. This website is designed to become a reliable, evolving record of the company, its approved capabilities and its verified projects.</p><p>Company history, leadership profiles, team information, safety policies and further capability statements will be published when supplied and approved.</p></div></section>
    <section className="credentials-detail"><div className="shell"><p className="eyebrow">Company credentials</p><div className="credentials-detail__grid"><article><span>Business registration</span><strong>{site.registration}</strong></article><article><span>CIDA registration</span><strong>{site.cidaRegistration}</strong></article><article><span>CIDA grade</span><strong>{site.cidaGrade}</strong></article></div></div></section>
    <section className="page-section shell company-principles"><SectionIntro number="02" label="A stronger company record" title="Built to grow with the business." /><div><article><span>01</span><h3>Verified project data</h3><p>Approved project records provide a durable reference point for the website, marketing and future company systems.</p></article><article><span>02</span><h3>Clear communication</h3><p>Clients can share their requirements through a structured enquiry rather than a generic contact request.</p></article><article><span>03</span><h3>Information with integrity</h3><p>Claims, profiles and portfolio material are published only when the facts can be confirmed.</p></article></div><Button href="/contact" variant="line">Contact Jasmin</Button></section>
  </PageLayout>
}
