import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 290px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 628px;
  }

  @media screen and (min-width: 1024px) {
    width: 892px;
  }

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 50px;
`;
const Header = styled.h2``;

export { Wrapper, Header };
