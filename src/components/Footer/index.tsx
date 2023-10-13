import { Container, ButtonLogin, OptionLogin, Platform, Line, OptionsFooter, About, ServicesAnchors, ContactUs, InfoContact, Options } from "./styles";

import { useTranslation } from 'react-i18next';
import "../../pages/i18n";

export default function Footer(props: {handleClickAnchor: any, about: any, services: any, meeting: any, contact: any} ) {
    const {t, i18n} = useTranslation();

    return (
      <Container>
        <Platform>
            <img src="/icon.svg" alt="Icon Spotemedia" />

            <OptionLogin>
                <h3>{t('footer.title')}</h3>
                <ButtonLogin>
                    <h4>Login</h4>
                </ButtonLogin>
            </OptionLogin>
        </Platform>
        <Line />
        <OptionsFooter>
            <About>
                <h5>{t('footerAboutOne.text')}
                <br />{t('footerAboutTwo.text')}</h5>
                <a href="https://www.linkedin.com/company/spotemedia-advertising-solution/">
                    <img src="/logoLinkedin.svg" alt="LinkedIn" />
                </a>
            </About>
            <Options>
                <ServicesAnchors>
                    <h5><b>{t('servicesMenu.title')}</b></h5>
                    <button onClick={() => {props.handleClickAnchor(props.about)}}>
                        <h5>{t('servicesMenu.subtitle1')}</h5>
                    </button>
                    <br />
                    <button onClick={() => {props.handleClickAnchor(props.services)}}>
                        <h5>{t('servicesMenu.subtitle2')}</h5>
                    </button>
                    <br />
                    <button onClick={() => {props.handleClickAnchor(props.meeting)}}>
                        <h5>{t('servicesMenu.subtitle3')}</h5>
                    </button>
                    <br />
                    <button onClick={() => {props.handleClickAnchor(props.contact)}}>
                        <h5>{t('servicesMenu.subtitle4')}</h5>
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