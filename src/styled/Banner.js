import styled from "styled-components";

export const Banner = styled.div`
  background-color: var(--blue-primary);
  padding-block: 1.5rem;
  color: var(--color-white);
  & .bannerContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
  & .productContainer {
    display: flex;
    align-items: center;
    background-image: var(--blue-linear);
    & .productInfo {
      padding-inline-start: 40px;
    }
    &.linearSecondary {
      background-image: var(--blue-linear2);
    }
    & a {
      color: var(--color-white);
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 24.7154px;
      line-height: 126.5%;
      /* or 31px */

      text-decoration-line: underline;
    }
    & .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 34.6016px;
      line-height: 126.5%;
    }
  }
`;
