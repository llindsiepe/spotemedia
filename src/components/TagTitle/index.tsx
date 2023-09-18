import { Container } from "./styles";

export default function TagTitle(props: {text: string}) {
  return (
    <Container>
      <img src="/icon.svg" alt="Icon Spotemedia" />
      <h5>{props.text}</h5>
    </Container>
  );
}
