import styled from '@emotion/styled'

import { Colors, colors } from '@styles/colorPalette'

const Spacing = styled.div<{
  size: number
  direction?: 'vertical' | 'horizontal'
  backgroundColor?: Colors
}>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical'
      ? `
        height: ${size}px;
      `
      : `
        width: ${size}px;
      `}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${colors[backgroundColor]};`}
`

export default Spacing
