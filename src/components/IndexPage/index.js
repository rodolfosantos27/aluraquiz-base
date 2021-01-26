import styled from 'styled-components';
import Head from 'next/head'


function IndexPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta property="og:url" content="https://www.meusite.com.br/ola-mundo"/>
      </Head>
    </div>
  )
}

export default IndexPage