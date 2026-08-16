import { Button } from '../components/Button'
import { PageHero, PageLayout, SectionIntro } from '../components/Layout'
import { Seo } from '../components/Seo'
import { processOutline } from '../data/site'

const hero = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85'

export function Process() {
  return <PageLayout headerDark><Seo title="Our Process" description="A clear starting point for a project with Jasmin Constructions." /><PageHero eyebrow="The first conversation" title="Make the next step clear." text="A straightforward enquiry helps build the right context before detailed scope, timing and project arrangements are agreed." image={hero} />
    <section className="page-section shell"><SectionIntro number="01" label="A transparent beginning" title="From your idea to a practical next step." text="This customer journey describes the early-stage conversation. The detailed delivery process will be added once confirmed by Jasmin Constructions." />
      <ol className="process-list">{processOutline.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></li>)}</ol>
    </section>
    <section className="split-cta shell"><div><p className="eyebrow">What to have ready</p><h2>A few details go a long way.</h2></div><ul><li>Project location or area</li><li>The type of work you are considering</li><li>Where you are in the planning process</li><li>Your preferred start timeframe</li></ul><Button href="/contact">Start your enquiry</Button></section>
  </PageLayout>
}
