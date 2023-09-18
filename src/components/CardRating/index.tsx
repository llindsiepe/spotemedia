import { Container, Name } from "./styles";

export default function CardServices(props: { name: string, text: string }) {
    return (
      <Container>
           <h5>{props.text}</h5>
           <Name>
            <h3>{props.name}</h3>
            <img src="/verifyIcon.svg" alt="Icon Verify" />
           </Name>
      </Container>
    );
  }
  