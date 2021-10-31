import styled from "styled-components";

export const AllLandingContainer = styled.div`
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  display: flex;
  flex-direction: column;
  width: 120rem;
  justify-content: center;
  font-family: "Gmarket Sans TTF";
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    flex-direction: column;
    align-items: center;
    transition: 0.5s all;
  }
`;

export const FirstLandingContainer = styled.div`
  width: 120rem;
  height: 51.313rem;
  display: flex;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  justify-content: center;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 615px;
    transition: 0.5s all;
  }
`;

export const FirstBodyContainer = styled.div`
  display: flex;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  padding: 0 30px 0 30px;
  width: 78.75rem;
  transition: 0.5s all;
  flex-direction: row-reverse;
  @media screen and (max-width: 37.5rem) {
    padding: 0 5px 0 5px;
    display: flex;
    flex-direction: column;
    transition: 0.5s all;
  }
`;

export const FirstTextContainer = styled.span`
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    margin-top: 0;
    transition: 0.5s all;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 360px;
    height: 313px;
    transition: 0.5s all;
  }
`;

export const FirstImageContainer = styled.div`
  margin-top: 7.5rem;
  width: 726.83px;
  height: 533.47px;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s all;
    img {
      width: 317px;
      height: 289px;
    }
  }
`;

export const FirstText = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  transition: 0.5s all;
  div {
    margin-bottom: 0.813rem;
  }
  @media screen and (max-width: 37.5rem) {
    font-size: 18px;
    transition: 0.5s all;
    div {
      margin-bottom: 4px;
    }
  }
`;

export const FirstSecondText = styled.div`
  font-weight: 300;
  font-size: 1.875rem;
  margin: 0.5rem 0 2.75rem 0;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    font-size: 20px;
    transition: 0.5s all;
    margin: 39px 0 45px 0;
    transition: 0.5s all;
  }
`;

export const GotoMainButton = styled.button`
  font-family: "Gmarket Sans TTF";
  font-weight: 100;
  width: 13.188rem;
  height: 4.063rem;
  background: #2d2d2d;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    width: 180px;
    height: 45px;
    font-size: 16px;
    transition: 0.5s all;
  }
`;

export const BigCircle = styled.span`
  position: relative;
  left: 7.05rem;
  top: 13.35rem;
  width: 10.125rem;
  height: 10.5rem;
  background: #fede8a;
  border-radius: 100%;
`;

export const SmallCircle = styled.span`
  position: relative;
  width: 2.945rem;
  height: 2.945rem;
  left: 10rem;
  top: 32.8rem;
  background: #fede8a;
  border-radius: 100%;
`;

export const SecLandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 635px;
  background: #fede8a;
  justify-content: center;
  font-family: Gmarket Sans TTF;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    width: 362px;
    height: 866px;
    display: flex;
    justify-items: center;
    justify-content: center;
    transition: 0.5s all;
  }
`;

export const SecBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fede8a;
  padding: 0 30px 0 30px;
  width: 78.75rem;
  transition: 0.5s all;

  @media screen and (max-width: 37.5rem) {
    padding: 0 5px 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s all;
  }
`;

export const SecAllBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  transition: 0.5s all;

  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    height: 684px;
    justify-content: space-between;
    transition: 0.5s all;
  }
`;

export const SecBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 5px;
  width: 396px;
  height: 400px;
  justify-content: space-evenly;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    width: 240px;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 0.5s all;
  }
`;

export const SecImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
  img {
    width: 135.5px;
    height: 164.75px;
    transition: 0.5s all;
  }
  @media screen and (max-width: 37.5rem) {
    height: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    img {
      width: 74.85px;
      height: 91px;
      transition: 0.5s all;
    }
  }
`;

export const SecBigTxtContainer = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    font-size: 14px;
    transition: 0.5s all;
  }
`;

export const SecDescrContainer = styled.div`
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  transition: 0.5s all;
  @media screen and (max-width: 37.5rem) {
    font-size: 12px;
    transition: 0.5s all;
  }
`;
