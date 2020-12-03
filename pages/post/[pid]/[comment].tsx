import React from 'react';
import Head from 'next/head';
import {Container} from '@/components';
import {useRouter} from 'next/router';

export default function Comment() {
  const router = useRouter();
  const {pid, comment} = router.query;
  return (
    <Container>
      <Head>
        <title>COMMENT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>pid: {pid}</div>
      <div>comment: {comment}</div>
    </Container>
  );
}
