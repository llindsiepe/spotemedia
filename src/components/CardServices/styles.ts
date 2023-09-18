import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 2.6rem;
    margin-bottom: -1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    font-family: Montserrat;
    color: #373737;
  }

  h5 {
    color: rgba(55, 55, 55, 0.6);
    text-align: justify;
    font-family: Montserrat;
    font-weight: 500;
    width: 32rem;

    margin-top: -1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 2rem;
`;

export const TagServices = styled.div`
  border-radius: 40px;
  background: rgba(165, 143, 247, 0.1);
  width: 6rem;
  height: 1.8rem;
  margin-top: auto;
  margin-bottom: auto;

  h5 {
    color: #a58ff7;
    font-family: Montserrat;
    font-weight: 600;
    margin: auto;
    padding: 0.3rem 0.5rem 0rem 0.8rem;
  }
`;
