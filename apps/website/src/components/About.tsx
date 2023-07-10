import {
  aspectRatio,
  box,
  container,
  grid,
  stack
} from '../../styled-system/patterns'
import NextImage from 'next/image'
import * as fonts from '@/app/fonts'
import clsx from 'clsx'
import { Button } from '@/components/Button'

export const About = () => {
  return (
    <div className={container({ paddingY: '4rem' })}>
      <div
        className={grid({
          gridTemplateColumns: '1fr',
          gap: 40,
          lg: { gridTemplateColumns: '1fr 1fr' }
        })}
      >
        <div className={stack({ gap: 8, justifyContent: 'center' })}>
          <h2
            className={clsx([
              fonts.heading.className,
              box({ fontSize: '2rem', fontWeight: 'semibold' })
            ])}
          >
            About us
          </h2>
          <p
            className={box({
              lineHeight: '200%',
              textAlign: 'justify',
              fontWeight: 'medium',
              color: 'gray.700'
            })}
          >
            We are passionate about cutting-edge technology. We build first and
            foremost for Mina Protocol. Our main product is Pallad, the modern
            and and advanced wallet for Mina. If you need a specialized
            development team for your next project - let's build it together.
          </p>
          <a className={Button({ scheme: 'link' })}>Contact us</a>
        </div>
        <div
          className={aspectRatio({
            display: 'none',
            ratio: 1.25,
            width: '100%',
            lg: { display: 'flex' }
          })}
        >
          <NextImage
            src="/about.jpg"
            width={700}
            height={200}
            alt="About"
            className={box({ borderRadius: 32 })}
          />
        </div>
      </div>
    </div>
  )
}
