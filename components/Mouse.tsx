import React from 'react';
import styled from 'styled-components';

const Mouse = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid white;
  width: 14px;
  height: 20px;
  border-radius: 12px;
`;
const ScrollWheel = styled.div`
  width: 2px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
`;

const Ring = styled.div<{size: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size ?? '25px'};
  height: ${(props) => props.size ?? '25px'};
  transform-origin: 50% 50%;
  border: 1px solid rgba(236, 75, 108, 0.5);
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 12px;
  transform: rotate(90deg);
  margin: 40px 0;
  line-height: 150%;
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function MouseWave() {
  return (
    <Wrapper>
      <Text>Discover more</Text>
      <Ring size={'69px'}>
        <Ring size={`41px`}>
          <Mouse>
            <ScrollWheel />
          </Mouse>
        </Ring>
      </Ring>
    </Wrapper>
  );
}
