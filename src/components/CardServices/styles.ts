import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;

  img {
    width: 2.6rem;
    margin-bottom: -1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    font-family: Montserrat;
    color: #373737;

    @media (max-width: 720px) {
      width: 22rem;
    }
  }

  h5 {
    color: rgba(55, 55, 55, 0.6);
    text-align: justify;
    font-family: Montserrat;
    font-weight: 500;
    width: 32rem;

    margin-top: -1rem;

    @media (max-width: 720px) {
      width: 22rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    gap: 0.5rem;
  }
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
    padding: 0 0 0rem 0.9rem;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
`;

export const AccordionContainer = styled.div``;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const AccordionTitle = styled.div`
  margin: 0;
  cursor: pointer;

  div {
    display: flex;
    gap: 2rem;
  }

  h5 {
    width: 28rem;
    color: #373737;
  }
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }: any) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.div`
  margin: 0;
  padding: 0 1rem 2rem;
  height: auto;

  h4 {
    font-weight: 500;
    font-size: 0.8rem;
    color: rgba(55, 55, 55, 0.6);
  }

  button {
    border: none;
    border-bottom: 0.16rem solid #a58ff7;
    background: none;

    font-family: Montserrat;
    cursor: pointer;
    font-weight: 500;
    color: #a58ff7;
  }
`;
