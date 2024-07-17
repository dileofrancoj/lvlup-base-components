import * as React from 'react'

import * as Styled from './Image.styled'
import { type Props } from './Image.types'

export const Image: React.FC<Props> = (props: Props) => {
  const { src, alt, thumbnail, maxWidth, onImageClick, ...rest } = props
  return (
    <Styled.Container>
        <Styled.Image
        onClick={onImageClick}
        src={src}
        alt={alt}
        thumbnail={thumbnail}
        maxWidth={maxWidth}
        {...rest}
        />
      </Styled.Container>
  )
}
