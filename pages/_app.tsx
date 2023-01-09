import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <Layout>
      <ToastContainer autoClose={2000} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
