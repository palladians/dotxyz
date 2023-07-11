import { Layout } from '@/components/Layout'
import {
  box,
  center,
  container,
  grid,
  stack
} from '../../../styled-system/patterns'
import NextImage from 'next/image'
import { Button } from '@/components/Button'
import * as fonts from '../fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Palladians'
}

const ProductsPage = () => {
  return (
    <Layout>
      <div className={container({ marginTop: '6rem' })}>
        <div
          className={grid({
            gridTemplateColumns: '1fr',
            gap: 40,
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: '4rem',
            md: {
              gridTemplateColumns: '1fr 1fr'
            }
          })}
        >
          <div className={stack({ gap: 4 })}>
            <h2
              className={box({
                ...fonts.heading.style,
                fontSize: '1.75rem',
                fontWeight: 'semibold'
              })}
            >
              User-centered Mina Protocol wallet
            </h2>
            <p
              className={box({
                lineHeight: '200%',
                textAlign: 'justify',
                color: 'gray.700',
                marginBottom: '2rem'
              })}
            >
              We used our past experience to create the best Mina wallet
              possible, focusing on the pain points of other wallets and
              listening to the Mina community. Our team has launched successful
              crypto wallets on other chains, but this time we came to Mina.
            </p>
            <div>
              <a
                className={Button({ scheme: 'outline' })}
                href="https://pallad.xyz"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit Pallad
              </a>
            </div>
          </div>
          <a className={center()} href="https://pallad.xyz" target="_blank">
            <NextImage
              src="/pallad-ill-bright.jpg"
              alt="Pallad Illustration"
              width={400}
              height={400}
              className={box({ borderRadius: 32 })}
            />
          </a>
        </div>
      </div>
      <div className={box({ backgroundColor: 'blue.50', paddingY: '4rem' })}>
        <div className={container()}>
          <div
            className={grid({
              gridTemplateColumns: '1fr',
              gap: 40,
              justifyContent: 'center',
              alignItems: 'center',
              paddingY: '4rem',
              md: {
                gridTemplateColumns: '1fr 1fr'
              }
            })}
          >
            <div className={stack({ gap: 4 })}>
              <h2
                className={box({
                  ...fonts.heading.style,
                  fontSize: '1.75rem',
                  fontWeight: 'semibold'
                })}
              >
                Hassle-free Web3 Authentication
              </h2>
              <p
                className={box({
                  lineHeight: '200%',
                  textAlign: 'justify',
                  color: 'gray.700',
                  marginBottom: '2rem'
                })}
              >
                Sign In With X framework allowing app developers integrate with
                Cardano, Mina, Ethereum, and Solana wallets. Shipped with
                predefined UI components, open-surced, quick, and secure.
              </p>
              <div>
                <a
                  className={Button({ scheme: 'outline' })}
                  href="https://passcard.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit Passcard
                </a>
              </div>
            </div>
            <a className={center()} href="https://passcard.dev" target="_blank">
              <NextImage
                src="/passcard-ill.jpg"
                alt="Pallad Illustration"
                width={400}
                height={400}
                className={box({ borderRadius: 32 })}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
