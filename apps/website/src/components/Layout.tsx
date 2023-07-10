import React, { useEffect } from 'react'
import { box, flex } from '../../styled-system/patterns'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={flex({ flexDirection: 'column', minHeight: '100vh' })}>
      <Navbar />
      <div className={box({ flex: 1 })}>{children}</div>
      <Footer />
    </div>
  )
}
