import styled from "styled-components";

export const Header = styled.header`
  padding-block: 1.5rem;
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
`;
