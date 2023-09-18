import Link from "next/link";

import { Container, Organize, OptionsMenu, ButtonLogin } from "./styles";
import { useRef } from "react";

export default function Header( props: {handleClick: any, aboutHandleClick: any, meetingHandleClick: any, contactHandleClick: any}) {
  const ref = useRef(null); 

  return (
    <Container>
      <Organize>
      <img src="/logotipo.svg" alt="Logotipo Spotemedia" />

      <OptionsMenu>
        <button onClick={props.aboutHandleClick}>
          <h5>About us</h5>
        </button>

        <button onClick={props.handleClick}>
          <h5>Our services</h5>
        </button>
        <button onClick={props.meetingHandleClick}>
          <h5>Meeting</h5>
        </button>
        <button onClick={props.contactHandleClick}>
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
