import { Container, ButtonLogin, OptionLogin, Platform, Line, OptionsFooter, About, ServicesAnchors, ContactUs, InfoContact, Options } from "./styles";

export default function Footer(props: {handleClickAnchor: any, about: any, services: any, meeting: any, contact: any} ) {
    return (
      <Container>
        <Platform>
            <img src="/icon.svg" alt="Icon Spotemedia" />

            <OptionLogin>
                <h3>Have an account?</h3>
                <ButtonLogin>
                    <h4>Login</h4>
                </ButtonLogin>
            </OptionLogin>
        </Platform>
        <Line />
        <OptionsFooter>
            <About>
                <h5>We are a digital Marketing Agency focused on boosting authority & visibility through strategic link building efforts.
                <br />We blend accuracy with persuasion to achieve exceptional results for ambitious Brands.</h5>
                <a href="https://www.linkedin.com/company/spotemedia-advertising-solution/">
                    <img src="/logoLinkedin.svg" alt="LinkedIn" />
                </a>
            </About>
            <Options>
                <ServicesAnchors>
                    <h5><b>Services</b></h5>
                    <button onClick={() => {props.handleClickAnchor(props.about)}}>
                        <h5>About us</h5>
                    </button>
                    <button onClick={() => {props.handleClickAnchor(props.services)}}>
                        <h5>Our services</h5>
                    </button>
                    <button onClick={() => {props.handleClickAnchor(props.meeting)}}>
                        <h5>Meeting</h5>
                    </button>
                    <button onClick={() => {props.handleClickAnchor(props.contact)}}>
                        <h5>Contact Us</h5>
                    </button>
                </ServicesAnchors>

                <ContactUs>
                    <h5><b>Contact Us</b></h5>

                    <InfoContact>
                        <img src="/Email.svg" alt="Email" />
                        <h5>admin@spotemedia.com</h5>
                    </InfoContact>
                    <InfoContact>
                        <img src="/Mark.svg" alt="Adress and opening hours" />
                        <h5>52th, The Gravel Walk Court - IR<br />
                        Mon - Fri : 08:00 AM - 17:00 PM</h5>
                    </InfoContact>
                </ContactUs>
            </Options>
        </OptionsFooter>
      </Container>
    );
  }