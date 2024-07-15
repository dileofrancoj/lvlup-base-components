type Loading = 'lazy' | 'eager' | undefined

export interface StyledImageProps {
  maxWidth?: string
  thumbnail?: boolean // border-radius
}

export interface Props extends StyledImageProps {
  src: string
  alt: string
  ariaLabel: string
  loading?: Loading
  onImageClick?: () => void
}
