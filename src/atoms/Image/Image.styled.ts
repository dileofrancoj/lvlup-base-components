import styled from 'styled-components'

import { type StyledImageProps } from './Image.types'

export const Container = styled.picture``

export const Image = styled.img<StyledImageProps>`
    height: auto;
    max-width: ${(props) => props.maxWidth !== null ? props.maxWidth : '100%'};
    border-radius: ${(props) => props.thumbnail === true ? '4px' : 'unset'};
    box-shadow: ${(props) => props.thumbnail === true ? '0 2px 2px rgba(0,0,0,0.15)' : 'none'};
`
