import { Container, Organize, OptionsMenu, ButtonLogin } from "./styles";

import { useTranslation } from 'react-i18next';
import "../traduce/i18n";

export default function Header( props: {handleClickAnchor: any, about: any, services: any, meeting: any, contact: any} ) {
  const {t, i18n} = useTranslation();

  return (
    <Container>
      <Organize>
      <img src="/logotipo.svg" alt="Logotipo Spotemedia" />

      <OptionsMenu>
        <button onClick={() => {props.handleClickAnchor(props.about)}}>
          <h5>{t('servicesMenu.subtitle1')}</h5>
        </button>
        <button onClick={() => {props.handleClickAnchor(props.services)}}>
          <h5>{t('servicesMenu.subtitle2')}</h5>
        </button>
        <button onClick={() => {props.handleClickAnchor(props.meeting)}}>
          <h5>{t('servicesMenu.subtitle3')}</h5>
        </button>
        <button onClick={() => {props.handleClickAnchor(props.contact)}}>
          <h5>{t('servicesMenu.subtitle4')}</h5>
        </button>
      </OptionsMenu>
      </Organize>

      <ButtonLogin>
        <h4>Login</h4>
      </ButtonLogin>
    </Container>
  );
}
