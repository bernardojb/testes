import Head from 'next/head'
import Image from 'next/image';
import Header from '../components/header/header'
import styles from './index.module.scss'
import fetch from 'node-fetch';
// import Loading from '../components/loading/loading'

const Index = props => (
  <>
    <Head>
      <title>hokup I Transformação Digital</title>
    </Head>
    <section>
      <Header />
      <div className="home-container">
        <div className="home-1">
          <h1>
            Home
          </h1>
        </div>
        <div className="home-2">
          <div className="cases_container">
            {props.products.map(product => (
              <Link
              key={product.id}
              href='/products/[id]'
              as={`/products/${product.id}`}>
                <div className={styles.case}>
                  <div className={styles.case_content}>
                    <h1>{product.name}</h1>
                    <p>{product.details}</p>
                    <p>{product.price}</p>
                    <a>Link</a>
                  </div>
                  <Image
                  key={product.image}
                  href={product.image}
                  width={150}
                  height={150}
                  />
                </div>
              </Link>

            ))}

          </div>
        </div>
      </div>
    </section>
  </>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "https://my-json-server.typicode.com/bernardojb/testes/cases"
  );
  const data = await res.json();
  return {
    cases: data
  };
}
