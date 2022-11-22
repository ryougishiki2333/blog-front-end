import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const WelcomeContainer: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>喇叭信息</Title>
    </Wrapper>
  );
};

export default WelcomeContainer;