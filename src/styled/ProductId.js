import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: var(--color-white);
  display: grid;
  padding: 1.5rem;
  grid-template-columns: 1fr 1fr;
  & .imageContainer {
    display: grid;
    gap: 1rem;
    grid-template-columns: 150px 1fr;
    grid-template-rows: repeat(3, 150px);
    overflow: hidden;
    & .image {
      width: 100%;
      object-fit: cover;
    }
  }
  & .productByInfo {
    padding: 1rem;
  }
  & .imageContainer figure:last-of-type {
    grid-column: 2/-1;
    grid-row: 1/-1;
    object-fit: contain;
  }
  & .priceStar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  & button {
    padding: 8px 42px;
    margin-inline-end: 1rem;
  }
`;

export const PropertyContainer = styled.div`
  padding: 1.5rem;
  background-color: var(--color-white);
  padding-block: 1.5rem;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  & h4 {
    margin: 0;
  }
  & .qualityContainer {
    width: 500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const CommentsContainer = styled.div`
  padding: 1.5rem;
  background-color: var(--color-white);
  padding-block: 1.5rem;
  & .commentsUser {
    display: grid;
    margin-block: 1.5rem;
    & .userProfile {
      display: flex;
      column-gap: 1.5rem;
    }
  }
`;
