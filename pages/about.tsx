import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {CompoundButton} from '@fluentui/react/lib/compat/Button';
import {Container, Hero, Title, SubTitle, Remark, Circle} from '@/components';
import {Stack} from '@fluentui/react';
import {motion} from 'framer-motion';

const variants = {
  container: {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      // transition: {
      //   staggerChildren: 0.4,
      // },
    },
  },
  title: {
    visible: {
      opacity: 1,
      y: 0,
      // height: 75,
      transition: {
        // delay: 0.3,
        type: 'spring',
        // duration: 1.5,
      },
    },
    hidden: {
      // height: 2,
      opacity: 0,
      y: 50,
    },
  },
  subtitle: {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 0.4,
        type: 'spring',
        // duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  },
  circle: {
    visible: {
      opacity: 1,
      x: 90,
      transition: {
        type: 'spring',
        // duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  },
  bike: {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        // duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 200,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container exit={{opacity: 0}}>
        <Circle
          radius={`50%`}
          background={`linear-gradient(45deg, #fa5267, deeppink)`}
          width={`1600px`}
          height={`1600px`}
          shadow
          absolute
          x={-800}
          y={0}
        />
        <motion.div style={{height: '100vh'}} variants={variants.container} initial="hidden" animate="visible">
          <Stack tokens={{childrenGap: '20px'}} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
            <Hero background={`ghostwhite`}>
              <Stack horizontal verticalFill>
                <Stack grow={2} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
                  <motion.div variants={variants.bike}>
                    <Image width={450} height={450} src="/img/sport_bike.png" />
                  </motion.div>
                  <Hero
                    radius={`50%`}
                    background={`linear-gradient(45deg, #fa5267, deeppink)`}
                    width={`300px`}
                    height={`300px`}
                    variants={variants.circle}
                    shadow
                    absolute
                    zIndex={-1}
                    x={45}
                    y={50}
                  />
                </Stack>
                <Stack grow={1} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
                  <Stack grow={1} verticalAlign={`end`} verticalFill>
                    <motion.div style={{overflow: 'hidden'}}>
                      <Title color={`black`} variants={variants.title}>
                        ROWER HAIBIKE
                      </Title>
                    </motion.div>
                    <motion.div variants={variants.subtitle}>
                      <SubTitle color={`black`}>
                        XDURO NDURO <Remark color={`deeppink`}>8.0</Remark>
                      </SubTitle>
                    </motion.div>
                  </Stack>
                  <Stack grow={1} verticalAlign={`center`} verticalFill>
                    <CompoundButton secondaryText="This is the secondary text.">Know More</CompoundButton>
                  </Stack>
                </Stack>
              </Stack>
            </Hero>
          </Stack>
        </motion.div>
      </Container>
    </>
  );
}
