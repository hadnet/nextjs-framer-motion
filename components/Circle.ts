import styled, {css} from 'styled-components';

interface CircleProps {
  color?: string;
  diameter?: string;
  radius?: string;
  shadow?: boolean;
  relative?: boolean;
  x?: string;
  y?: string;
  zIndex?: number;
  tr?: boolean;
  bl?: boolean;
  br?: boolean;
}

function selectRef(props: {[key: string]: boolean | undefined}) {
  switch (true) {
    case props.tr:
      return ['top', 'right'];
    case props.bl:
      return ['bottom', 'left'];
    case props.br:
      return ['bottom', 'right'];
    default:
      return ['top', 'left'];
  }
}
export const Circle = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({color}) =>
    color?.includes('linear-gradient')
      ? css`
          background: ${color};
        `
      : css`
          background-color: ${color || 'white'};
        `};
  width: ${({diameter}) => diameter ?? '15px'};
  height: ${({diameter}) => diameter ?? '15px'};
  border-radius: ${({radius}) => radius ?? '50%'};
  ${({shadow}) =>
    shadow
      ? css`
          box-shadow: 2px 8px 30px 15px rgba(0, 0, 0, 0.2);
        `
      : null};
  position: ${(props) => (props.relative ? 'relative' : 'absolute')};
  ${(props) => {
    const {tr, br, bl} = props;
    const [yRef, xRef] = selectRef({tr, br, bl});
    const pattern = /^-?\d*\.?\d*(px|%)$/;
    if (props.x && props.y) {
      if (!(pattern.test(props.x) && pattern.test(props.y))) throw new Error('Only CSS px and % are supported');
    }
    return !props.relative
      ? css`
          ${yRef}: ${props.y ?? 0};
          ${xRef}: ${props.x ?? 0};
        `
      : null;
  }};
  z-index: ${(props) => props.zIndex ?? 0};
`;
