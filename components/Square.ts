import styled from 'styled-components';

export const Square = styled.div<{relative?: boolean}>`
  width: 89px;
  height: 89px;
  top: 25px;
  left: 4%;
  border-radius: 25px;
  border: 4px solid #f71b59;
  position: ${(props) => (props.relative ? 'relative' : 'absolute')};
`;
