import React from 'react';
import Head from 'next/head';
import {Stack} from '@fluentui/react';
import {Card, Container, Shape, Circle, Square, Title, Remark, MouseWave, Button, Pill} from '@/components';

export default function Home() {
  return (
    <Container exit={{opacity: 0}}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Square />
      <Circle x={`10%`} y={`85px`} tr />
      <Shape pattern={`verticalParticleBullet`} />
      <Stack grow verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
        <Card>
          <Shape pattern={'Menu'} />
          <Circle color="#d8415e" diameter={`10px`} x={`125px`} y={`75px`} />
          <Circle color="#fff" diameter={`10px`} x={`75px`} y={`175px`} bl />
          <Circle color="#d8415e" diameter={`37px`} x={`22%`} y={`100px`} tr />
          <Circle color="#d8415e" diameter={`37px`} x={`22%`} y={`160px`} tr />
          <Shape pattern={`cornerLine`} />
          <div style={{position: 'relative'}}>
            <Circle color="#d8415e" diameter={`47px`} x={`-100px`} y={`45%`} zIndex={3}>
              <span style={{position: 'absolute', transform: 'rotate(180deg)', top: -40, left: 10}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.869 5.68954L15.8084 6.75019L20.3083 11.25H0.75V12.7501H20.3081L15.8084 17.2498L16.869 18.3104L23.1796 12L16.869 5.68954Z"
                    fill="white"
                  />
                </svg>
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.869 5.68954L15.8084 6.75019L20.3083 11.25H0.75V12.7501H20.3081L15.8084 17.2498L16.869 18.3104L23.1796 12L16.869 5.68954Z"
                  fill="white"
                />
              </svg>
            </Circle>
            <Stack horizontalAlign={'start'}>
              <Shape pattern={`01`} />
              <Stack gap={35} horizontal verticalAlign={`center`} horizontalAlign={'space-between'}>
                <Title color={`white`}>We help you grow</Title>
                <Pill />
              </Stack>
              <Stack.Item align={`end`}>
                <Title color={`white`}>to turn your ideas</Title>
              </Stack.Item>
              <Title color={`white`}>
                into working{' '}
                <Remark color={`#d8415e`} bold>
                  business
                </Remark>
              </Title>
              <Stack.Item align={'start'}>
                <Button title={`Let's talk`} />
              </Stack.Item>
            </Stack>
          </div>
          <MouseWave />
          <Shape pattern={'lessThan'} />
          <Shape pattern={'greaterThan'} />
          <Circle color="#fff" diameter={`10px`} x={`300px`} y={`150px`} br />
          <Circle color="#d8415e" diameter={`10px`} x={`100px`} y={`40px`} br />
          <Shape pattern={'solidBullet'} />
          <Shape pattern={'bulletParticle'} />
          <Shape pattern={'doubleCircleLine'} />
          <Shape pattern={'particleCircle'} />
          <Shape pattern={'halfCircle'} />
        </Card>
      </Stack>
      <Shape pattern={`triangleRect`} />
      <Shape pattern={`roundTriangle`} />
      <Circle color="#d8415e" x={`60%`} y={`33px`} bl />
      <Shape pattern={`greaterThanSet`} />
    </Container>
  );
}
