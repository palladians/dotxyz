import React, { ComponentProps } from 'react'
import { Animated } from 'react-native'

import { box } from '../../styled-system/patterns'

interface ComposeBoxProps {
  baseComponent?: any
  css?: any
}

export const composeBox =
  ({ BaseComponent = Animated.View, css }: ComposeBoxProps) =>
  (props: any) =>
    <BaseComponent className={box(css)} {...props} />
export const Box = composeBox({})

export type BoxProps = ComponentProps<typeof Box>
