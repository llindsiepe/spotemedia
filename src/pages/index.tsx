import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

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


  return (
    <Container>
      <Header handleClickAnchor={handleClickAnchor} about={about} services={services} meeting={meeting} contact={contact} />

      <BannerHome ref={about}>
        <TextBanner>
          <TitlePage>
            <h1>Opportunities in Digital <b>are <Markup>Boundless.</Markup></b></h1>
            <h5>
            We are a digital Marketing Agency focused on boosting authority & visibility through strategic link building efforts. <br/>
            We usually blend accuracy with persuasion to achieve exceptional results for ambitious brands.</h5>
          </TitlePage>
          <OptionsBanner>
            <ButtonCTA onClick={() => {handleClickAnchor(meeting)}}>
              <h5>Schedule a meeting</h5>
              <img src="/arrow.svg" alt="skip" />
            </ButtonCTA>
            <ButtonSecondary onClick={() => {handleClickAnchor(contact)}}>
              <h5>Contact us</h5>
            </ButtonSecondary>
          </OptionsBanner>
        </TextBanner>

        <ImageBanner>
          <img src="/mockupBanner.svg" alt="Mockup System" />
        </ImageBanner>
      </BannerHome>
      {/* <BackgroundBanner>
        <img src="/sidebar.png" />
      </BackgroundBanner> */}


      <BannerData>
        <DataInfo>
          <h1><b>+</b>30mil</h1>
          <h5>Partner Domains</h5>
        </DataInfo>

        <img src="/line.svg" alt="Line" />

        <DataInfo>
          <h1><b>+</b>50mil</h1>
          <h5>Generated Traffic</h5>
        </DataInfo>

        <img src="/line.svg" alt="Line" />

        <DataInfo>
          <h1><b>+</b>2mil</h1>
          <h5>Delivered Content</h5>
        </DataInfo>
      </BannerData>

      <Functions>
        <ImageBanner>
          <img src="/mockupFunction.svg" alt="Mockup Functions" />
        </ImageBanner>

        <TextFunctions>
          <TagTitle text="Functions" />

          <TitlePage>
            <h1>Take <b>full control.</b></h1>
            <h5>Take control over your business with comprehensive management tools. Work as a team by adding team members, create new projects and manage budgets with project spendings insights.</h5>

            <h3>Integration with the main SEO Tools</h3>

            <img src="/SEOTools.png" alt="SEO Tools" />
          </TitlePage>
        </TextFunctions>
      </Functions>

      <Services ref={services}>
          <TextServices>
            <TagTitle text="Services" />

            <TitlePage>
              <h1>Services for you</h1>
              <h5>With our experts who execute very well SEO operations and advertising strategies, texts that convert, fast pages, ranking goals, high quality backlinks & what really matters: <br/>
                An exclusive team capable of increasing organic and paid traffic while bringing conversions on your website that will be essential to increase your business.
              </h5>
            </TitlePage>
          </TextServices>
          
          <ImageServices>
            <img src="/mockupServices.svg" alt="Mockup Services" />
          </ImageServices>
      </Services>

      <CardServicesGroup>
        <Cards>
          <CardServices icon="/linkbuilding.svg" title="Link Building" text="Unlock the best Link-building opportunities. Our team works to obtain the best conditions for your backlinks, and guarantees an assertive reach, regardless of country or niche." 
            bulletOne="Strategic outreach:  We identify relevant & authority sites in your niche, establishing mutually beneficial partnerships to acquire quality backlinks."
            bulletTwo="Content creation:  We develop high-quality content that naturally integrates backlinks, on reputable sites to increase your brand's visibility."
            bulletThree="Competitor analysis: Track your competitor's backlink profiles to discover valuable opportunities, ensuring that your link building strategy remains competitive & effective."
            bulletFour="Performance tracking:  Monitor the impact of the backlinks you acquire on your site's search engine rankings and organic traffic, optimising your campaign for maximum results." />
          <CardServices icon="/contentmarketing.svg" title="Content Marketing" text="We focus on creating and distributing valuable content to attract and retain a defined audience and drive profitable customer action."
            bulletOne="Strategic planning:  We develop a content strategy for your target audience, ensuring that each piece aligns with your brand's goals and values."
            bulletTwo="Content creation:  We create diverse, high-quality content such as articles, infographics, banners, ads & much more in + 15 languages."
            bulletThree="SEO Optimisation:  Incorporate strategic keywords & recommended natural topics to increase the visibility of your content."
            bulletFour="Audience research:  We monitor the content created to understand the pain points & behaviour of your audience, allowing to create content that really resonates." />
        </Cards>
        <Cards>
          <CardServices icon="/brandawareness.svg" title="Brand Awareness" text="We make it possible to select the best opportunities to achieve your goals. We analyze your audience, negotiate powerful partnerships, and make your brand a household name in your industry."
            bulletOne="Notoriety & Visibility: Reach your audience with PR/Outreach campaigns expanding across diverse platforms."
            bulletTwo="Time: Save time & we negotiate it faster."
            bulletThree="Pinpointing: Optimal opportunities aligned with your goals."
            bulletFour="Familiar Connection: Create strong bond between your Logo, brand's name, & what it represents in people's minds." />
          <CardServices icon="/pressrelations.svg" title="Press Relations" text="We create relevant, creative and targeted content, attracting the attention of the media and your target audience, thus placing your brand in the spotlight."
            bulletOne="Influencer engagement:  We get the key influencers in your sector to amplify and reach a wider audience."
            bulletTwo="Content creation:  We develop attractive & relevant content, including PR, articles and multimedia materials."
            bulletThree="Brand monitoring:  We keep an eye on online conversations & news coverage related to your brand, allowing for timely reactions and engagement."
            bulletFour="Measurement : Whether it's a Unicorn or React campaign we track the impact of your PR efforts through metrics and analyses, providing valuable insights into campaign success and informing future strategies." />
        </Cards>
      </CardServicesGroup>

      <Meeting ref={meeting}>

        <TextMeeting>
            <TagTitle text="Meeting" />

            <TitlePage>
              <h1>Want to know more? <Markup>Let{"'"}s meet.</Markup></h1>
              <h5>Take control over your business with comprehensive management tools. Work as a team by adding team members, create new projects and manage budgets with project spendings insights.</h5>
            </TitlePage>
        </TextMeeting>
        <InlineWidget url="https://calendly.com/spotemedia/meet" />
      </Meeting>

      <Rating>
        <TextRating>
          <TitlePage>
            <h1>See what others <Markup>are saying.</Markup></h1>
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
          <h1><b>Let{"'"}s talk</b> about your business!</h1>
          <h5>We offer solutions for your business, exploring possibilities and creating opportunities.
            <br/>Let{"'"}s talk about your brand!</h5>
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
