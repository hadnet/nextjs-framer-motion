import React from 'react';
import {HTMLMotionProps, motion} from 'framer-motion';
import styled from 'styled-components';

const MENU_HEIGHT = '81px';
const Content = styled(motion.div)`
  margin-top: ${MENU_HEIGHT};
  min-height: calc(100vh - ${MENU_HEIGHT});
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Container = (props: HTMLMotionProps<'div'>) => {
  return <Content {...props} />;
};
