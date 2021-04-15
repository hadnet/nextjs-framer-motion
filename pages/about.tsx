import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {CompoundButton} from '@fluentui/react/lib-commonjs/Button';
import {Container, Hero, Title, SubTitle, Remark, H3, Circle} from '@/components';
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
          color={`linear-gradient(45deg, #fa5267, deeppink)`}
          diameter={`1200px`}
          shadow
          x={`-600px`}
          y={`-100px`}
        />
        <motion.div style={{height: '100vh'}} variants={variants.container} initial="hidden" animate="visible">
          <Stack tokens={{childrenGap: '20px'}} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
            <Hero background={`ghostwhite`}>
              <Stack horizontal verticalFill>
                <Stack grow={1} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
                  <motion.div variants={variants.bike}>
                    <Image priority width={450} height={450} layout="fixed" src="/img/sport_bike.png" />
                  </motion.div>
                  <Hero
                    radius={`50%`}
                    background={`linear-gradient(45deg, #fa5267, deeppink)`}
                    width={`300px`}
                    height={`300px`}
                    variants={variants.circle}
                    zIndex={-1}
                    x={45}
                    y={50}
                    shadow
                    absolute
                  />
                </Stack>
                <Stack grow={1} verticalAlign={`center`} horizontalAlign={`center`} verticalFill>
                  <Stack grow={3} horizontalAlign={`start`} verticalAlign={`end`}>
                    <motion.div style={{overflow: 'hidden'}}>
                      <Title color={`black`} variants={variants.title}>
                        ROWER HAIBIKE
                      </Title>
                    </motion.div>
                    <motion.div variants={variants.subtitle}>
                      <SubTitle color={`black`}>
                        XDURO NDURO{' '}
                        <Remark color={`deeppink`} bold>
                          8.0
                        </Remark>
                      </SubTitle>
                    </motion.div>
                    <motion.div variants={variants.subtitle} style={{paddingTop: 16}}>
                      <H3 color={`gray`}>
                        SPRAWDZ JUZ DZIS NASZE{' '}
                        <Remark color={`black`} bold>
                          NAJLEPSZE OKAZJE
                        </Remark>
                      </H3>
                    </motion.div>
                  </Stack>
                  <Stack grow={1} tokens={{padding: '32px 0 0'}}>
                    <CompoundButton secondaryText="Contact us for conditions.">Know More</CompoundButton>
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
