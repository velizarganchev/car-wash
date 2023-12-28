<<<<<<< HEAD
import { Inter } from 'next/font/google'
import Contact from '@/components/contact'
import Main from '@/components/main'
import About from '@/components/about'
import Header from '@/components/header/header-component'

const inter = Inter({ subsets: ['latin'] })
=======
import Header from '@/components/header/header-component'
import Services from '@/components/services/services-component'
import Book from '@/components/book/book-component'
>>>>>>> dev

export default function Home() {
  return (
    <main>
      <Header />
<<<<<<< HEAD
=======
      <Services />
      <Book />
>>>>>>> dev
    </main>
  )
}
