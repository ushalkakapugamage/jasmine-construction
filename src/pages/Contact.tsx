import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { PageLayout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { inquiryTypes, projectStages, site } from '../data/site'

type FormValues = {
  name: string; phone: string; email: string; type: string; location: string; stage: string; description: string; size: string; budget: string; timeframe: string
}

const initialValues: FormValues = { name: '', phone: '', email: '', type: '', location: '', stage: '', description: '', size: '', budget: '', timeframe: '' }

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [notice, setNotice] = useState('')
  function update(name: keyof FormValues, value: string) { setValues((current) => ({ ...current, [name]: value })) }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }
    const content = [
      `Name: ${values.name}`, `Phone: ${values.phone}`, `Email: ${values.email}`, `Project type: ${values.type}`, `Location: ${values.location}`,
      `Project stage: ${values.stage}`, `Approximate size: ${values.size || 'Not provided'}`, `Budget: ${values.budget || 'Not provided'}`,
      `Preferred start: ${values.timeframe || 'Not provided'}`, '', 'Project description:', values.description,
    ].join('\n')
    const link = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${values.name}`)}&body=${encodeURIComponent(content)}`
    setNotice('Your email app will open with your enquiry ready to review and send.')
    window.location.href = link
  }
  return <PageLayout headerDark><Seo title="Start a Project" description="Start a project enquiry with Jasmin Constructions." />
    <section className="contact-hero"><div className="shell"><p className="eyebrow eyebrow--light">Start your project</p><h1>Begin with<br /><em>the brief.</em></h1><p>Share a few important details. They will help make the first discussion more useful.</p></div></section>
    <section className="contact-layout shell"><aside className="contact-aside"><p className="eyebrow">Direct contact</p><h2>Prefer a direct conversation?</h2><a href={`tel:${site.phones[0].replaceAll(' ', '')}`}>{site.phones[0]}</a><a href={`tel:${site.phones[1].replaceAll(' ', '')}`}>{site.phones[1]}</a><a href={`mailto:${site.email}`}>{site.email}</a><a className="whatsapp-link" href={`https://wa.me/${site.whatsapp}?text=Hello%20Jasmin%20Constructions%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer">Message on WhatsApp <span>↗</span></a><p className="contact-aside__note">No information is stored on this website. Sending the form opens your email app, so you remain in control of the enquiry.</p></aside>
      <form className="project-form" onSubmit={submit} noValidate><div className="form-heading"><span>01</span><div><h2>Project enquiry</h2><p>Fields marked with * are required.</p></div></div><div className="form-grid"><Field label="Your name" required><input value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" required /></Field><Field label="Phone number" required><input value={values.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" type="tel" required /></Field><Field label="Email address" required><input value={values.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" type="email" required /></Field><Field label="Project type" required><select value={values.type} onChange={(event) => update('type', event.target.value)} required><option value="">Select project type</option>{inquiryTypes.map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="Project location" required><input value={values.location} onChange={(event) => update('location', event.target.value)} required /></Field><Field label="Current project stage" required><select value={values.stage} onChange={(event) => update('stage', event.target.value)} required><option value="">Select current stage</option>{projectStages.map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="Approximate size (optional)"><input value={values.size} onChange={(event) => update('size', event.target.value)} placeholder="e.g. floor area or site size" /></Field><Field label="Budget range (optional)"><input value={values.budget} onChange={(event) => update('budget', event.target.value)} placeholder="Optional" /></Field><Field label="Preferred start / timeframe (optional)" wide><input value={values.timeframe} onChange={(event) => update('timeframe', event.target.value)} placeholder="e.g. within six months" /></Field><Field label="Tell us about your project" required wide><textarea value={values.description} onChange={(event) => update('description', event.target.value)} rows={6} required /></Field></div><div className="form-actions"><Button type="submit">Prepare email enquiry</Button><p>Your form opens as an email draft. Add supporting files directly in your email app before sending.</p></div>{notice && <p className="form-notice" role="status">{notice}</p>}</form>
    </section>
  </PageLayout>
}

function Field({ label, required = false, wide = false, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) {
  return <label className={`field ${wide ? 'field--wide' : ''}`}><span>{label}{required && <b aria-hidden="true"> *</b>}</span>{children}</label>
}
