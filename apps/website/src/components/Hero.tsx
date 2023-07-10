'use client'

import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient'
import {
  box,
  center,
  container,
  flex,
  grid,
  stack
} from '../../styled-system/patterns'
import { TypeAnimation } from 'react-type-animation'
import * as fonts from '@/app/fonts'
import clsx from 'clsx'
import { Button } from '@/components/Button'

export const Hero = () => {
  return (
    <div
      className={clsx([
        fonts.heading.className,
        box({
          boxSizing: 'border-box',
          position: 'relative',
          maxWidth: '100vw'
        })
      ])}
    >
      <MeshGradientRenderer
        colors={['#C3E4FF', '#6EC3F4', '#EAE2FF', '#B9BEFF', '#B3B8F9']}
        className={box({ width: '100%', height: '100%' })}
        wireframe
      />
      <div className={container({})}>
        <div
          className={grid({
            width: '100%',
            height: '100%',
            gridTemplateColumns: '1fr',
            gap: 40,
            paddingY: '4rem',
            lg: {
              gridTemplateColumns: '1fr 1fr',
              paddingY: '8rem'
            }
          })}
        >
          <div
            className={stack({
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100%',
              gap: 8,
              paddingTop: '4rem'
            })}
          >
            <TypeAnimation
              wrapper="h1"
              className={box({
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'blue.900',
                letterSpacing: -2,
                height: '11rem',
                sm: {
                  height: '11rem'
                },
                md: {
                  height: '4rem'
                },
                lg: {
                  height: '8rem'
                }
              })}
              preRenderFirstString
              cursor={false}
              sequence={[
                'Bridging the gap between today',
                500,
                'Bridging the gap between today and tomorrow',
                2000,
                'Bridging the gap between you',
                500,
                'Bridging the gap between you and the Web3',
                1000,
                'Bridging the gap between you and the Web3.'
              ]}
            />
            <a className={Button()}>Contact us</a>
          </div>
          <div className={center({ display: 'none', lg: { display: 'flex' } })}>
            <div className={flex({ flexWrap: 'wrap', gap: 2 })}>
              <div className={Button({ scheme: 'outline' })}>Mina Protocol</div>
              <div className={Button({ scheme: 'outline' })}>EVM</div>
              <div className={Button({ scheme: 'outline' })}>zkApps</div>
              <div className={Button({ scheme: 'outline' })}>
                Web Development
              </div>
              <div className={Button({ scheme: 'outline' })}>
                Mobile Development
              </div>
              <div className={Button({ scheme: 'outline' })}>Web3</div>
              <div className={Button({ scheme: 'outline' })}>Wallets</div>
              <div className={Button({ scheme: 'outline' })}>dApps</div>
              <div className={Button({ scheme: 'outline' })}>Consulting</div>
              <div className={Button({ scheme: 'outline' })}>UI/UX Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
