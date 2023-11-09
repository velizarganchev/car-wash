import { Inter } from 'next/font/google'
import Contact from '@/components/contact'
import Main from '@/components/main'
import About from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Main />
      <About />
      <Contact />
    </main>
  )
}