import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Title = styled(motion.h1)<{color: string}>`
  margin: 0;
  text-align: center;
  line-height: 1.15;
  font-size: 4rem;
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
  & a {
    color: ${(props) => props.theme?.colors?.primary ?? props.color};
    text-decoration: none;
  }
  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }
`;

export const SubTitle = styled(motion.h2)<{color: string}>`
  margin: 0;
  text-align: center;
  line-height: 1.15;
  font-size: 3rem;
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
`;

export const Remark = styled.span<{color: string}>`
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
`;
