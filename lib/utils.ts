import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const basePath = process.env.NODE_ENV === 'production' ? '/Portafolio' : ''

export function getAssetPath(path: string) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
