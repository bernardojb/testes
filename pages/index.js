import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/header'
import styles from './index.module.scss'
import fetch from 'isomorphic-unfetch'
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
                <div className={styles.case_container}>
                  <div className={styles.case_content}>
                    <div className={styles.pill_container}>
                      <div className={styles.pill}>{product.pill1}</div>
                      <div className={styles.pill}>{product.pill2}</div>
                    </div>
                    <Image
                      key={product.caselogo}
                      src={product.caselogo}
                      width={150}
                      height={60}
                    />
                    <p>{product.details}</p>
                    <a>conheça o site</a>
                  </div>
                  <div className={styles.case_image}>
                    <Image
                     key={product.caseimage}
                     src={product.caseimage}
                     width={200}
                     height={200}
                    />
                  </div>
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
    "https://my-json-server.typicode.com/bernardojb/testes/products"
  );
  const data = await res.json();
  return {
    products: data
  };
};

export default Index;
