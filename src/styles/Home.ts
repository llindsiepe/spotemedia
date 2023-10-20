import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat";
  overflow-x: hidden;
  margin: -0.5rem;
`;

export const BannerHome = styled.div`
  display: flex;
  justify-content: space-between;

  margin-left: 2rem;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const BackgroundBanner = styled.div`
  margin-left: rem;
`;

export const TextBanner = styled.div`
  width: 22rem;
  margin-top: 8rem;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    margin-top: 6rem;
  }
`;

export const TitlePage = styled.div`
  h1 {
    font-weight: 400;
    font-size: 3.2rem;
    color: #373737;

    @media (max-width: 720px) {
      width: 22rem;
      font-size: 3rem;
    }
  }

  h3 {
    color: #373737;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 600;
  }

  h5 {
    font-weight: 500;
    margin-top: -0.8rem;
    color: rgba(55, 55, 55, 0.6);

    @media (max-width: 720px) {
      width: 22rem;
    }
  }

  img {
    @media (max-width: 720px) {
      width: 20rem;
    }
  }
`;

export const Markup = styled.div`
  font-weight: bold;
  box-shadow: 10px 0 0 0 #ffb800, -5px 0 0 0 #ffb800;
  background: #ffb800;
  display: inline;
  padding: 3px 0 !important;
  position: relative;
`;

export const OptionsBanner = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 720px) {
    margin-bottom: 4rem;
  }
`;

export const ButtonCTA = styled.button`
  border-radius: 60px;
  background: #23194a;
  width: 14rem;
  height: 2.6rem;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  border-color: transparent;

  img {
    margin-top: auto;
    margin-bottom: auto;
    width: 1rem;
  }

  h5 {
    color: white;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 0.8rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  &:hover {
    transition: 1.4s;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonSecondary = styled.button`
  border-radius: 60px;
  border: 1.2px solid #23194a;
  background: #fff;
  width: 10rem;
  height: 2.6rem;
  padding-left: 1rem;
  padding-right: 1rem;

  h5 {
    color: #23194a;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 0.8rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  &:hover {
    transition: 1.4s;
    cursor: pointer;
    background-color: #23194a;

    h5 {
      color: white;
    }
  }
`;

export const ImageBanner = styled.div`
  img {
    @media (max-width: 720px) {
      width: 24rem;
    }
  }
`;

export const BannerData = styled.div`
  background: #ffb800;
  display: flex;
  justify-content: center;
  gap: 4rem;

  margin-bottom: 4rem;

  @media (max-width: 720px) {
    display: inline-block;
    width: 100%;
  }

  img {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const DataInfo = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: -3rem;

    b {
      color: #23194a;
    }
  }

  h5 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const Functions = styled.div`
  display: flex;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const TextFunctions = styled.div`
  width: 32rem;
  margin-top: 10rem;

  @media (max-width: 720px) {
    margin-top: 2rem;
    margin-left: 2rem;

    width: 22rem;
  }
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-between;

  margin-left: 2rem;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const TextServices = styled.div`
  width: 32rem;
  margin-top: 5rem;

  @media (max-width: 720px) {
    width: 26rem;
  }
`;

export const ImageServices = styled.div`
  margin-top: -10rem;

  img {
    @media (max-width: 720px) {
      width: 24rem;
      margin-top: 10rem;
    }
  }
`;

export const CardServicesGroup = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  gap: 12rem;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const Meeting = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;

  margin-left: 2rem;
  margin-right: 2rem;
`;

export const TextMeeting = styled.div`
  width: 40rem;

  margin-left: auto;
  margin-right: auto;
`;

export const Rating = styled.div`
  margin-top: 12rem;
  margin-bottom: 8rem;

  @media (max-width: 720px) {
    margin-top: 6rem;
  }
`;

export const TextRating = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 720px) {
    margin-left: 2rem;
  }
`;

export const Talking = styled.div`
  background-color: #23194a;
  height: 18rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: inline-block;
    height: 36rem;
  }
`;

export const TextTalking = styled.div`
  h1 {
    color: #fff;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 3.6rem;

    width: 36rem;

    @media (max-width: 720px) {
      font-size: 3rem;
      width: 22rem;
    }
  }

  h5 {
    color: rgba(255, 255, 255, 0.6);
    text-align: justify;
    font-family: Montserrat;
    font-weight: 400;

    width: 28rem;

    @media (max-width: 720px) {
      width: 20rem;
    }
  }
`;

export const FormsTalking = styled.form`
  padding-right: 3rem;
  width: 28rem;

  margin-top: auto;
  margin-bottom: auto;

  input {
    font-family: Montserrat;
    background: none;
    width: 28rem;
    border: 1px white solid;
    padding: 1rem;
    color: white;

    margin-bottom: 1rem;
    border-radius: 0.5rem;

    &::placeholder {
      color: white;
    }

    &:focus {
      color: white;
    }

    @media (max-width: 720px) {
      width: 18rem;
    }
  }

  button {
    font-family: Montserrat;
    font-weight: 700;
    border: none;
    text-align: center;
    width: 30rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    background-color: white;
    color: #23194a;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 720px) {
      width: 20rem;
    }
  }
`;
