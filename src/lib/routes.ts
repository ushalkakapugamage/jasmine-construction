const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export function sitePath(path = '/') {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`
  return `${basePath}${normalizedPath}` || '/'
}

export function appPathname() {
  const pathname = window.location.pathname
  if (basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))) {
    return pathname.slice(basePath.length) || '/'
  }
  return pathname
}
