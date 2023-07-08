import styled from "styled-components";

interface PageProps {
  image: string;
  description: string;
  button?: JSX.Element;
}

function Page(props: PageProps) {
  const { image, description, button } = props;

  return (
    <Container>
      <Description>{description}</Description>
      <Image>
        <img src={image} alt="onboarding" />
      </Image>
      {button !== undefined && button}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
`;

const Description = styled.p`
  margin: 0 0 35px 0;
  font-size: 24px;
`;

const Image = styled.div`
  max-width: 275px;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Page;
