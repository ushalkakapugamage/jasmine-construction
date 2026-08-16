import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from './Icons'

type Common = { children: ReactNode; variant?: 'solid' | 'line' | 'light'; icon?: boolean; className?: string }
type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; target?: string; rel?: string }

export function Button({ children, variant = 'solid', icon = true, className = '', href, target, rel, ...props }: ButtonProps) {
  const classes = `button button--${variant} ${className}`
  const content = <>{children}{icon && <ArrowUpRight className="button__icon" />}</>
  return href ? <a className={classes} href={href} target={target} rel={rel}>{content}</a> : <button className={classes} {...props}>{content}</button>
}
