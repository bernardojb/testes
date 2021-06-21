import Head from 'next/head'
import Header from '../components/header/header'
import Loading from '../components/loading/loading'

export default function Cases() {
    return (
        <Loading>
            <Head>
                <title>Cases</title>
            </Head>
            <section>
                <Header />
                <main>
                    <h1>
                        Cases
                    </h1>
                </main>
            </section>
        </Loading>
    )
}