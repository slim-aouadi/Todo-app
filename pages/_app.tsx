import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import React from 'react'
import { DarkModeContextProvider } from '../context/DarkModeContext'
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache })
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <Layout>
          <ToastContainer autoClose={2000} />
          <Component {...pageProps} />
        </Layout>
      </DarkModeContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
