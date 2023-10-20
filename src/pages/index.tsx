import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';
import "../components/traduce/i18n";

import Header from "../components/Header";
import TagTitle from "../components/TagTitle";
import { Container, BannerHome, TextBanner, TitlePage, Markup, OptionsBanner, ButtonCTA, ButtonSecondary, ImageBanner, BannerData, DataInfo, Functions, TextFunctions, Services, TextServices, ImageServices, CardServicesGroup, Cards, Meeting, TextMeeting, Rating, TextRating, Talking, FormsTalking, TextTalking, BackgroundBanner } from "../styles/Home";
import CardServices from "../components/CardServices";
import { Carousel } from '@trendyol-js/react-carousel';
import Item from "../components/CardRating";
import Footer from "../components/Footer"

import { InlineWidget } from "react-calendly";

export default function Home() {
  const form = useRef();

  const about = useRef(null);
  const services = useRef(null); 
  const meeting = useRef(null);
  const contact = useRef(null); 

  const handleClickAnchor = (ref: any) => {
    //@ts-ignore
    ref.current?.scrollIntoView({behavior: 'smooth'})
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p1j2pzm",
        "service_p1j2pzm",
        e.target,
        "tqBBBeZ4PrQH8FVbY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso");
        },
        (error) => {
          console.log(error.text);  
          alert("Falha ao mandar mensagem");     
        }
      );
      e.target.reset()
  };

  const {t, i18n} = useTranslation();

    //@ts-ignore
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }


  return (
    <Container>
      <Header handleClickAnchor={handleClickAnchor} about={about} services={services} meeting={meeting} contact={contact} onClickEnglish={() => changeLanguage('en')} onClickPortuguese={() => changeLanguage('pt')} onClickSpanish={() => changeLanguage('es')} />

      <BannerHome ref={about}>
        <TextBanner>
          <TitlePage>
            <h1>{t('bannerOne.title')}<b>{t('bannerTwo.title')} <Markup>{t('bannerThree.title')}</Markup></b></h1>
            <h5>{t('titlepage.text')}</h5>
          </TitlePage>
          <OptionsBanner>
            <ButtonCTA onClick={() => {handleClickAnchor(meeting)}}>
              <h5>{t('buttoncta.text')}</h5>
              <img src="/arrow.svg" alt="skip" />
            </ButtonCTA>
            <ButtonSecondary onClick={() => {handleClickAnchor(contact)}}>
              <h5>{t('buttonsecondary.text')}</h5>
            </ButtonSecondary>
          </OptionsBanner>
        </TextBanner>

        <ImageBanner>
          <img src="/mockupBanner.svg" alt="Mockup System" />
        </ImageBanner>
      </BannerHome>


      <BannerData>
        <DataInfo>
          <h1><b>+</b>30.000</h1>
          <h5>{t('datainfo-one.text')}</h5>
        </DataInfo>

        <img src="/line.svg" alt="Line" />

        <DataInfo>
          <h1><b>+</b>50.000</h1>
          <h5>{t('datainfo-two.text')}</h5>
        </DataInfo>

        <img src="/line.svg" alt="Line" />

        <DataInfo>
          <h1><b>+</b>2.000</h1>
          <h5>{t('datainfo-three.text')}</h5>
        </DataInfo>
      </BannerData>

      <Functions>
        <ImageBanner>
          <img src="/mockupFunction.svg" alt="Mockup Functions" />
        </ImageBanner>

        <TextFunctions>
          <TagTitle text={t('tagtitle.functions')} />

          <TitlePage>
            <h1>{t('functionsOne.title')} <b>{t('functionsTwo.title')}</b></h1>
            <h5>{t('functions.text')}</h5>

            <h3>{t('functions.subtitle')}</h3>

            <img src="/SEOTools.png" alt="SEO Tools" />
          </TitlePage>
        </TextFunctions>
      </Functions>

      <Services ref={services}>
          <TextServices>
            <TagTitle text={t('tagtitle.services')} />

            <TitlePage>
              <h1>{t('services.title')}</h1>
              <h5>{t('services.text')}</h5>
            </TitlePage>
          </TextServices>
          
          <ImageServices>
            <img src="/mockupServices.svg" alt="Mockup Services" />
          </ImageServices>
      </Services>

      <CardServicesGroup>
        <Cards>
          <CardServices icon="/linkbuilding.svg" title={t('Card-service-one.title')} text={t('Card-service-one.text')}
            bulletOne={t('Card-service-one.text-one')}
            bulletTwo={t('Card-service-one.text-two')}
            bulletThree={t('Card-service-one.text-three')}
            bulletFour={t('Card-service-one.text-four')} />
          <CardServices icon="/contentmarketing.svg" title={t('Card-service-two.title')} text={t('Card-service-two.text')}
            bulletOne={t('Card-service-two.text-one')}
            bulletTwo={t('Card-service-two.text-two')}
            bulletThree={t('Card-service-two.text-three')}
            bulletFour={t('Card-service-two.text-four')} />
        </Cards>
        <Cards>
          <CardServices icon="/brandawareness.svg" title={t('Card-service-three.title')} text={t('Card-service-three.text')}
            bulletOne={t('Card-service-three.text-one')}
            bulletTwo={t('Card-service-three.text-two')}
            bulletThree={t('Card-service-three.text-three')}
            bulletFour={t('Card-service-three.text-four')} />
          <CardServices icon="/pressrelations.svg" title={t('Card-service-four.title')} text={t('Card-service-four.text')}
            bulletOne={t('Card-service-four.text-one')}
            bulletTwo={t('Card-service-four.text-two')}
            bulletThree={t('Card-service-four.text-three')}
            bulletFour={t('Card-service-four.text-four')} />
        </Cards>
      </CardServicesGroup>

      <Meeting ref={meeting}>

        <TextMeeting>
            <TagTitle text={t('tagtitle.meeting')} />

            <TitlePage>
              <h1>{t('meetingOne.title')}<Markup>{t('meetingTwo.title')}</Markup></h1>
              <h5>{t('meeting.text')}</h5>
            </TitlePage>
        </TextMeeting>
        <InlineWidget url="https://calendly.com/spotemedia/meet" />
      </Meeting>

      <Rating>
        <TextRating>
          <TitlePage>
            <h1>{t('ratingOne.title')}<Markup>{t('ratingTwo.title')}</Markup></h1>
          </TitlePage>
        </TextRating>

        <Carousel show={2} slide={2} leftArrow={<img src="/arrow-left.svg" />} rightArrow={<img src="/arrow-right.svg" />} >
          <Item name="Alex Kall" text="Spote has been our guide to get into organic traffic to our site and visibility on other sites through quality link building, we are pleased with the spontaneous growth"/>
          <Item name="Veronika Mva" text="We were having a lot of difficulty achieving the volume of backlinks we needed for our products, Spote was able to help us quickly, without skimping on the quality of the content at a fair price"/>
          <Item name="Roy Leib." text="We work with sensitive content, it's hard to find suppliers who are so quick to deliver this type of content, so I can say that I'm very satisfied with the partnership so far."/>
        </Carousel>

      </Rating>

      <Talking ref={contact}>
        <TextTalking>
          <h1><b>{t('talkingOne.title')}</b>{t('talkingTwo.title')}</h1>
          <h5>{t('talkingOne.text')}
            <br/>{t('talkingTwo.text')}</h5>
        </TextTalking>

        <FormsTalking onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required/>
          <br />
          <input type="email" name="user_email" placeholder="Email" required/>
          <br />
          <input type="text" name="user_company" placeholder="Company" />
          <br />
          <button type="submit">Send!</button>
        </FormsTalking>
      </Talking>

      <Footer handleClickAnchor={handleClickAnchor} about={about} services={services} meeting={meeting} contact={contact} />
    </Container>
  );
}
