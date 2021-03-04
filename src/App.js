import Styled from "styled-components";
import Banner from "./components/Banner";
import SubTitle from "./components/SubTitle";

const Title = Styled.h1`
  font-size: 64px;
  color: red;
`;

export default function App() {
  return (
    <div className="App">
      <Banner message={"This is a banner!"} />
      <Title>Hello CodeSandbox</Title>
      <SubTitle>Start editing to see some magic happen!</SubTitle>
    </div>
  );
}
