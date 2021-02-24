import Head from 'next/head'

import Icon from '../components/Icon'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Desafio-frontend-js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Abacaxi</h1>
        <Icon name="bookmark"/>
      </main>

    </div>
  )
}
