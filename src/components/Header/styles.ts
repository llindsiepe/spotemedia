import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem;
  justify-content: space-between;
  display: flex;

  img {
    width: 12rem;
  }
`;

export const Organize = styled.div`
  display: flex;
  gap: 5rem;
`;

export const OptionsMenu = styled.div`
  display: flex;
  gap: 3rem;
  color: rgba(55, 55, 55, 0.6);

  button {
    font-family: Montserrat;
    font-size: 1rem;
    border: none;
    background: none;

    &:hover {
      color: #ffb800;
      cursor: pointer;
      transition: 0.5s;
    }

    h5 {
      font-weight: 500;
    }
  }
`;

export const ButtonLogin = styled.button`
  height: 2rem;
  width: 8rem;
  border-radius: 20px;
  border-color: transparent;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h4 {
    color: #a58ff7;
    font-weight: 700;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-family: Montserrat;
  }

  &:hover {
    background: #23194a;
    transition: 1s;
    cursor: pointer;

    h4 {
      color: white;
    }
  }
`;
