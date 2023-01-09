import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen relative bg-neutral-800">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
