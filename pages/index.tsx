import React from 'react';
import Head from 'next/head';
import {Stack} from '@fluentui/react';
import {NavBasic, Container} from '@/components';

export default function Home() {
  return (
    <Container exit={{opacity: 0}}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack verticalAlign={`center`} horizontalAlign={`center`} horizontal verticalFill>
        <Stack.Item>
          <NavBasic />
        </Stack.Item>
        <Stack.Item grow={9}>
          <div>HOME</div>
        </Stack.Item>
      </Stack>
    </Container>
  );
}
