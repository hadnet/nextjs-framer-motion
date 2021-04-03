import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  position: relative;
  width: 150px;
  height: 43px;
  margin: 16px 0 0;
  display: flex;
  padding: 0 25px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 22px;
  background-color: #d8415e;
  z-index: 3;
`;

function Bubble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.1 17.813c.057-.206-.066-.491-.184-.697a2.007 2.007 0 00-.12-.178 9.366 9.366 0 01-1.546-5.156C2.233 6.52 6.596 2.25 11.992 2.25c4.705 0 8.633 3.26 9.55 7.587.138.641.208 1.296.208 1.952 0 5.269-4.195 9.606-9.59 9.606-.858 0-2.016-.216-2.647-.393a17.714 17.714 0 01-1.425-.474A1.46 1.46 0 007 20.545l-3.18 1.148a.748.748 0 01-.218.057.45.45 0 01-.45-.457.744.744 0 01.029-.154l.92-3.326z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M7.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#fff"
      />
    </svg>
  );
}

export function Button({title}: {title: string}) {
  return (
    <StyledButton>
      {title} <Bubble />
    </StyledButton>
  );
}
