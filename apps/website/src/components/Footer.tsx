import {
  box,
  container,
  grid,
  hstack,
  stack
} from '../../styled-system/patterns'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { LinkedinIcon, TwitterIcon } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      className={box({
        borderTop: '1px gray solid',
        borderTopColor: 'gray.200',
        color: 'gray.500',
        fontWeight: 500
      })}
    >
      <div className={container({ paddingY: '4rem' })}>
        <div
          className={grid({
            gridTemplateColumns: '1fr',
            gap: 8,
            md: { gridTemplateColumns: '1fr 1fr 1fr' }
          })}
        >
          <div className={stack({ gap: 4 })}>
            <NextImage
              src="/logo-light.svg"
              alt="Pallad Logo"
              width={120}
              height={28}
            />
            <div className={hstack()}>
              <a
                href="https://twitter.com/palladians_xyz"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://linkedin.com/company/palladians"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedinIcon />
              </a>
            </div>
            <p>&copy; {year} Palladians</p>
          </div>
          <div className={stack({ gap: 4 })}>
            <p className={box({ fontWeight: 'semibold' })}>Products</p>
            <a
              href="https://pallad.xyz"
              target="_blank"
              rel="noreferrer noopener"
            >
              Pallad
            </a>
            <a
              href="https://passcard.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              Passcard
            </a>
          </div>
          <div className={stack({ gap: 4 })}>
            <p className={box({ fontWeight: 'semibold' })}>Documents</p>
            <NextLink href="/privacy">Privacy Policy</NextLink>
            <NextLink href="/terms">Terms of Service</NextLink>
          </div>
        </div>
      </div>
    </div>
  )
}
