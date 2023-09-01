import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactQueryProvider } from './ReactQueryProvider'
import { Providers } from './redux/provider'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'OnlineStore - An Ecommerce App',
  description: 'An Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <body className={`${poppins.className} min-h-screen flex flex-col`}>
          <Providers>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
