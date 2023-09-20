import styled from "styled-components";

export const Container = styled.div`
  margin-top: -1.6rem;
  margin-left: 2rem;

  h5 {
    width: 32rem;
    color: rgba(55, 55, 55, 0.6);
    text-align: justify;
    font-family: Montserrat;
    font-weight: 500;

    @media (max-width: 720px) {
      max-width: 10rem;
    }
  }

  h3 {
    color: #373737;
    font-family: Montserrat;
    font-weight: 500;
  }
`;

export const Name = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: -1rem;

  img {
    margin-top: -1rem;
  }
`;
