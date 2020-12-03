import React from 'react';
import Head from 'next/head';
import {Container} from '@/components';
import {useRouter} from 'next/router';

export default function Rest() {
  const router = useRouter();
  const {rest} = router.query;
  return (
    <Container>
      <Head>
        <title>REST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>rest[0]: {rest?.[0]}</div>
    </Container>
  );
}
