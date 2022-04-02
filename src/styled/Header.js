import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding-block: 1.5rem;
  background-color: var(--color-white);
  & .headerContainer {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  & .navigation ul {
    display: flex;
    gap: 3rem;
    color: var(--blue-dark);

    & li {
      list-style-type: none;
    }
    & li i {
      color: var(--color-dark);
    }
  }
  & .form {
    width: 100%;
    display: flex;
    align-items: center;
    & input[type="text"] {
      width: 90%;
      padding: 8px;
      outline: none;
      border: 2px solid #8a8fb9;
      box-sizing: border-box;
    }
    & button {
      padding: 10px 15px;
      background-color: var(--pink-primary);
      color: var(--color-white);
      border: none;
    }
  }
  & .iconContent {
    position: relative;
  }
  & .cartAlert {
    position: absolute;
    padding: 3px;
    width: 1rem;
    height: 1rem;
    background-color: red;
    border-radius: 60px;
    top: -0.75rem;
    right: -1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
  }
`;
