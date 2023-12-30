import Header from '@/components/header/header-component'
import Services from '@/components/services/services-component'
import Book from '@/components/book/book-component'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Services />
      <Book />
    </Fragment>
  )
}
