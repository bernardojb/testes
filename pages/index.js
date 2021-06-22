import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/header'
import styles from './index.module.scss'
import fetch from 'isomorphic-unfetch'
import { animate, motion } from "framer-motion"
// import Loading from '../components/loading/loading'

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    trasition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    trasition: {
      staggerChildren: 0.1
    }
  }
}

const Index = props => (
  <motion.div
    exit={{ opacity: 0 }}
    initial="initial"
    animate="animate"
  >
    <Head>
      <title>hokup I Transformação Digital</title>
    </Head>
    <section>
      <Header />
      <div className="home-container">
        <div className={styles.home_1}>
          <h1>
            Home
          </h1>
        </div>
        <div className="home-2">
          <motion.div variants={stagger} className={styles.cases_container}>
            {props.products.map(product => (
              <Link
                key={product.id}
                href='/products/[id]'
                as={`/products/${product.id}`}>
                <motion.div variants={fadeInUp} className={styles.case_container}>
                  <div className={styles.case_content}>
                    <div className={styles.pill_container}>
                      <div className={styles.pill}>{product.pill1}</div>
                      <div className={styles.pill}>{product.pill2}</div>
                    </div>
                    <div className={styles.case_logo}>
                      <Image
                        key={product.caseLogo}
                        src={product.caseLogo}
                        width={product.logoWidth}
                        height={product.logoHeight}
                      />
                    </div>
                    <p>{product.details}</p>
                    <a className={styles.b_btn}>conheça o site</a>
                  </div>
                  <div className={styles.case_image}>
                    <motion.img
                      key={product.caseImage}
                      src={product.caseImage}
                      width={product.imageWidth}
                      height={product.imageHeight}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      trasition={{ delay: .2 }}
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </motion.div>
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
