import React from 'react'
import { useDarkModeContext } from '../context/DarkModeContext'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const theme = useDarkModeContext()

  return (
    <div
      className={`flex flex-col min-h-screen relative ${theme} bg-color-base`}
    >
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
