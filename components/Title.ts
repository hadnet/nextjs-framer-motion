import styled from 'styled-components';
import {motion} from 'framer-motion';

type BaseProps = {
  color: string;
};

export const Title = styled(motion.h1)<BaseProps>`
  margin: 0;
  position: relative;
  z-index: 2;
  text-align: center;
  line-height: 1.15;
  font-size: 3rem;
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

export const SubTitle = styled(motion.h2)<BaseProps>`
  margin: 0;
  text-align: center;
  line-height: 1.15;
  font-size: 3rem;
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
`;

export const H3 = styled(motion.h3)<BaseProps>`
  margin: 0;
  text-align: center;
  line-height: 1.15;
  font-weight: normal;
  font-size: 1.5rem;
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
`;

export const Remark = styled.span<BaseProps & {bold?: boolean}>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => props.theme?.colors?.primary ?? props.color};
`;
