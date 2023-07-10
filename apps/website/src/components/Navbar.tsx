'use client'

import { box, center, flex, hstack } from '../../styled-system/patterns'
import NextImage from 'next/image'
import * as fonts from '@/app/fonts'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { useState } from 'react'
import { Menu } from '@/components/Menu'
import { CommandIcon, MenuIcon } from 'lucide-react'
import NextLink from 'next/link'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div
      className={clsx([
        fonts.heading.className,
        box({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          md: {
            top: '0.5rem',
            left: '2rem',
            right: '2rem'
          }
        })
      ])}
    >
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div
        className={box({
          backdropFilter: 'blur(16px)',
          borderRadius: 0,
          md: {
            borderRadius: 64
          }
        })}
      >
        <div
          className={flex({
            width: '100%',
            backgroundColor: 'gray.900',
            opacity: 0.8,
            paddingX: 4,
            paddingY: 4,
            borderRadius: 0,
            color: 'gray.100',
            justifyContent: 'space-between',
            md: {
              paddingX: 12,
              borderRadius: 64
            }
          })}
        >
          <NextLink href="/" className={center()}>
            <NextImage src="/logo.svg" width={108} height={14} alt="Logo" />
          </NextLink>
          <div
            className={hstack({
              gap: 12,
              display: 'none',
              lg: { display: 'flex' }
            })}
          >
            <NextLink
              href="/products"
              className={Button({ scheme: 'link', colorScheme: 'white' })}
            >
              Products
            </NextLink>
            <NextLink
              href="/contact"
              className={Button({ scheme: 'link', colorScheme: 'white' })}
            >
              Contact
            </NextLink>
            <a
              className={flex({
                ...fonts.heading.style,
                fontWeight: 'semibold',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              })}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <CommandIcon size={16} />
              <span>K</span>
            </a>
          </div>
          <a
            className={flex({ display: 'flex', lg: { display: 'none' } })}
            onClick={() => setMenuOpen(!menuOpen)}
            data-hotkey="Command+k"
          >
            <MenuIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
