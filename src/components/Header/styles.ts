import styled from "styled-components";

import portuguese from "../../../public/Portuguese.png";
import spanish from "../../../public/Spanish.png";
import english from "../../../public/USA.png";

export const Container = styled.div`
  margin: 2rem;
  justify-content: space-between;
  display: flex;

  img {
    width: 12rem;

    @media (max-width: 720px) {
      width: 8rem;
    }
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

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    gap: 1rem;
  }
`;

export const ButtonLogin = styled.button`
  height: 2rem;
  width: 8rem;
  border-radius: 20px;
  border-color: transparent;
  background: #23194a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: auto;
  margin-bottom: auto;

  h4 {
    color: white;
    font-weight: 700;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-family: Montserrat;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    width: 6rem;
  }
`;

export const Translate = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: auto;
  margin-bottom: auto;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    @media (max-width: 720px) {
      width: 20px;
      height: 20px;
    }
  }

  #english {
    background-image: url(${english.src});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    border: none;

    @media (max-width: 720px) {
      background-size: 20px 20px;
    }
  }

  #portuguese {
    background-image: url(${portuguese.src});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    border: none;

    @media (max-width: 720px) {
      background-size: 20px 20px;
    }
  }

  #spanish {
    background-image: url(${spanish.src});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    border: none;

    @media (max-width: 720px) {
      background-size: 20px 20px;
    }
  }

  @media (max-width: 720px) {
    gap: 0.5rem;
  }
`;
