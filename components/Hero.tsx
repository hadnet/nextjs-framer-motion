import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

interface HeroProps {
  background?: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: boolean;
  absolute?: boolean;
  x?: number;
  y?: number;
  zIndex?: number;
}

export const Hero = styled(motion.div)<HeroProps>`
  ${({background}) =>
    background?.includes('linear-gradient')
      ? css`
          background: ${background};
        `
      : css`
          background-color: ${background};
        `};
  width: ${({width}) => width ?? '1080px'};
  height: ${({height}) => height ?? '600px'};
  border-radius: ${({radius}) => radius ?? '20px'};
  padding: 10px;
  ${({shadow}) =>
    shadow
      ? css`
          box-shadow: 2px 8px 30px 15px rgba(0, 0, 0, 0.2);
        `
      : null};
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  ${(props) =>
    props.absolute
      ? css`
          top: ${props.y ?? 0}px;
          left: ${props.x ?? 0}px;
        `
      : null};
  z-index: ${(props) => props.zIndex ?? 0};
`;
