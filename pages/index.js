import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <time>{siteTitle}</time>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there! I am Jona Wessendorf!</p>
        <p>This is a sample site I build using the Next.js tutorial.</p>
      </section>
    </Layout>
  );
}
