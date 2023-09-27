import React, { useState, useRef } from "react";

import { Container, Title, TagServices, Section, InnerSection, AccordionContainer, AccordionInner, AccordionItem, AccordionTitle, AccordionBody, AccordionContent } from "./styles";

export default function CardServices(props: {icon: any, title: string, text: string, bulletOne:string, bulletTwo:string, bulletThree:string, bulletFour:string }) {

  const sampleAccordionData = [
    {
      title: `${props.title}`,
      previous: `${props.text}`,
      bulletOne: `${props.bulletOne}`,
      bulletTwo: `${props.bulletTwo}`,
      bulletThree: `${props.bulletThree}`,
      bulletFour: `${props.bulletFour}`,
    },
  ];
  
  const AccordionItems = ({
    accordionContent,
    refs,
    currentAccordion,
    setCurrentAccordion,
    setBodyHeight,
    bodyHeight
  }: any) =>
    accordionContent.map(({ title, previous, bulletOne, bulletTwo, bulletThree, bulletFour } : any, i : any) => (
      <AccordionItem key={`accordion-item-${i}`}>
        <AccordionTitle
          onClick={() => {
            setCurrentAccordion(i);
            setBodyHeight(refs[i].current.clientHeight);
            console.log(refs[i].current.clientHeight);
          }}
        >
          <div>
            <h3>{title}</h3>
            <TagServices>
                <h5>See more</h5>
            </TagServices>
          </div>
          <h5>{previous}</h5>
        </AccordionTitle>
        <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
          <AccordionContent ref={refs[i]}>
            <h4>{bulletOne}</h4>
            <h4>{bulletTwo}</h4>
            <h4>{bulletThree}</h4>
            <h4>{bulletFour}</h4>
            <button onClick={setCurrentAccordion}>See less</button>
          </AccordionContent>
        </AccordionBody>
      </AccordionItem>
    ));

  const [currentAccordion, setCurrentAccordion] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);

  const refs = [item0];

    return (
      <Container>
            <img src={props.icon} alt="Icon Services" />
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={sampleAccordionData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    );
  }
  