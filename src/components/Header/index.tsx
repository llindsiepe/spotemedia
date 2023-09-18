import { Container, Organize, OptionsMenu, ButtonLogin } from "./styles";

export default function Header( props: {handleClickAnchor: any, about: any, services: any, meeting: any, contact: any} ) {
  return (
    <Container>
      <Organize>
      <img src="/logotipo.svg" alt="Logotipo Spotemedia" />

      <OptionsMenu>
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
          <h5>Contact</h5>
        </button>
      </OptionsMenu>
      </Organize>

      <ButtonLogin>
        <h4>Login</h4>
      </ButtonLogin>
    </Container>
  );
}
