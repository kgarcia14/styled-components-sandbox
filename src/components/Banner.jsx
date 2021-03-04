import Styled from "styled-components";
import SubTitle from "./SubTitle";

const Wrapper = Styled.div`
  background-color: silver;
  color: purple;
  padding: 16px;
`;

const Banner = (props) => {
  const { message } = props;
  return (
    <Wrapper>
      <SubTitle>{message}</SubTitle>
    </Wrapper>
  );
};

export default Banner;
