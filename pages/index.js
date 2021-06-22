import Head from 'next/head'
import Header from '../components/header/header'
// import Loading from '../components/loading/loading'
import styles from './index.module.scss'

const Index = props => (
    <div>
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
              <div className={styles.case}>
                <div className={styles.case_content}>
                  <div className={styles.pill_container}>
                    <div className={styles.pill}>APP</div>
                    <div className={styles.pill}>UI & UX</div>
                  </div>
                  <h1>Orthohack</h1>
                  <p>Desenvolvimento de um app para iOS e Android, como ferramenta complementar do curso online de especialização em ortopedia.</p>
                  <a>Link</a>
                </div>  
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );

  Index.getInitialProps = async function() {
    const res = await fetch(
    "https://my-json-server.typicode.com/bernardojb/testes/cases"
    );
    const data = await res.json();
    return{
      cases: data
    };
  }
