import { css } from "styled-components";

export const sizes = {
  phone: 0,
  tablet: 768,
  desktop: 1150,
  bigDesktop: 1600,
  bigDesktop2: 1850,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
