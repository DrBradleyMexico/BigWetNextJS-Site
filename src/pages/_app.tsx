import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Code_Pro } from '@next/font/google'
import { Layout } from '@/components/layout/layout'

const sourceCodePro = Source_Code_Pro({
  weight: '300',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sourceCodePro.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
