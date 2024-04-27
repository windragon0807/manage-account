import { forwardRef, SelectHTMLAttributes } from 'react'
import styled from '@emotion/styled'

import Flex from './Flex'
import Text from './Text'
import { colors } from '@styles/colorPalette'

const BaseSelect = styled.select`
  height: 52px;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  padding: 0 16px;
  cursor: pointer;
  appearance: none; // 기본 select 스타일 제거
  background: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%23000000%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%20.4C4.697.4.399%204.698.399%2010A9.6%209.6%200%200%200%2010%2019.601c5.301%200%209.6-4.298%209.6-9.601%200-5.302-4.299-9.6-9.6-9.6zm-.001%2017.2a7.6%207.6%200%201%201%200-15.2%207.6%207.6%200%201%201%200%2015.2zM12%206H8v4H5.5l4.5%204.5%204.5-4.5H12V6z%22%20%2F%3E%3C%2Fsvg%3E')
    no-repeat;
  background-position: right 10px center; // 아이콘 위치 조정
  background-size: 22px; // 아이콘 크기 조정
  padding-right: 40px; // 오른쪽 패딩 추가
  &:required:invalid {
    color: #c0c4c7;
  }
`
export type Option = {
  label: string
  value: string | number | undefined
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: Option[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label ? (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          css={{ marginBottom: 6 }}>
          {label}
        </Text>
      ) : null}
      <BaseSelect required ref={ref} value={value} {...props}>
        <option disabled hidden value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  )
})

export default Select
