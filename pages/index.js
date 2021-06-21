import Head from 'next/head'
import Header from '../components/header/header'
import Loading from '../components/loading/loading'

export default function Home() {
  return (
    <Loading>
      <Head>
        <title>hokup I Transformação Digital</title>
      </Head>
      <section>
        <Header />
        <div>
          <h1>
            Home
          </h1>
        </div>
      </section>
    </Loading>
  )
}