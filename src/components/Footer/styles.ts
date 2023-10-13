import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
`;

export const Platform = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 2.6rem;
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
`;

export const OptionLogin = styled.div`
  display: flex;
  gap: 2rem;

  h3 {
    color: #373737;
    font-family: Montserrat;
    font-weight: 400;
  }
`;

export const Line = styled.div`
  border: 0.1rem #373737 solid;
  opacity: 0.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const OptionsFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 12rem;

  @media (max-width: 720px) {
    gap: 0rem;
    margin-top: 2rem;
  }
`;

export const About = styled.div`
  h5 {
    width: 22rem;
    color: #373737;
    font-family: Montserrat;
    font-weight: 400;
  }
`;

export const ServicesAnchors = styled.div`
  width: 12rem;

  h5 {
    color: #373737;
    font-family: Montserrat;
    font-weight: 400;

    b {
      color: #23194a;
    }
  }

  button {
    font-family: Montserrat;
    font-size: 1rem;
    border: none;
    background: none;

    h5 {
      margin-top: -1rem;
      font-weight: 500;

      @media (max-width: 720px) {
        color: #373737;
      }
    }

    &:hover {
      cursor: pointer;
      transition: 0.5s;
      h5 {
        color: #ffb800;
        font-weight: 600;
        transition: 1s;
      }
    }
  }
`;

export const ContactUs = styled.div`
  width: 18rem;

  h5 {
    color: #373737;
    font-family: Montserrat;
    font-weight: 400;

    b {
      color: #23194a;
    }
  }
`;

export const InfoContact = styled.div`
  display: flex;
  gap: 1rem;
`;
