import { cva } from '../../styled-system/css'
import * as fonts from '@/app/fonts'

const basePadding = {
  paddingX: 8,
  paddingY: 4
}

export const Button = cva({
  base: {
    ...fonts.heading.style,
    fontWeight: 'semibold',
    cursor: 'pointer',
    transition: 'color 300ms ease-out, background-color 300ms ease-out',
    textWrap: 'nowrap'
  },
  variants: {
    scheme: {
      primary: {
        ...basePadding,
        backgroundColor: 'gray.100',
        color: 'gray.700',
        borderRadius: '2rem',
        _hover: {
          backgroundColor: 'blue.200',
          color: 'blue.700'
        }
      },
      link: {
        color: 'blue.700',
        _hover: {
          color: 'blue.400'
        }
      },
      outline: {
        paddingX: 4,
        paddingY: 2,
        color: 'blue.600',
        border: '2px black solid',
        borderColor: 'blue.600',
        borderRadius: '2rem',
        backdropFilter: 'blur(1rem)'
      }
    },
    colorScheme: {
      white: {
        color: 'gray.50'
      }
    }
  },
  defaultVariants: {
    scheme: 'primary'
  }
})
