import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unreol Freedom Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Unreol Freedom Blog</h1>
      <p><i>We are working for just a better world</i></p>
      <a href={'/posts'}>Go to posts</a>
    </div>
  )
}