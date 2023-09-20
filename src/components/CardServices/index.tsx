import { Container, Title, TagServices } from "./styles";

export default function CardServices(props: {icon: any, title: string, text: string }) {
    return (
      <Container>
            <img src={props.icon} alt="Icon Services" />
        <Title>
            <h3>{props.title}</h3>
            <TagServices>
                <h5>See more</h5>
            </TagServices>
        </Title>
        <h5>{props.text}</h5>
      </Container>
    );
  }
  