import styled from "styled-components";

export const Product = styled.div`
  background-color: var(--color-white);
  margin-block-start: 1.5rem;
  display: grid;
  grid-template-columns: 313px 1fr auto;
  padding: 1rem;
  column-gap: 2rem;
  & .productImage img {
    width: 100%;
  }
  & .discount {
    color: var(--pink-primary);
    text-decoration: line-through;
  }
  & .productScores {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  & .productAction {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 1rem;
    & button:first-of-type {
      color: var(--color-white);
      background-color: var(--pink-primary);
      border: none;
      margin-block-end: 1rem;
    }
    & button:last-of-type {
      background-color: var(--color-white);
      border: 1px solid var(--pink-primary);
      color: var(--pink-primary);

      margin-block-end: 1rem;
    }
  }
  & button {
    padding: 8px 42px;
    width: 100%;
  }
`;
