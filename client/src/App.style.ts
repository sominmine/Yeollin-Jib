import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 4.938rem;
  background: linear-gradient(0deg, #fdfbfe, #fdfbfe), #fbfbfb;
  border-bottom: 0.063rem solid #e0dde1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  min-height: 90vh;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  display: flex;
  justify-content: center;
`;

export const MainArea = styled.main`
  width: 78.75rem;
  background: linear-gradient(0deg, #fbfafc, #fbfafc);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  height: 11.313rem;
  background: linear-gradient(0deg, #fdfbfe, #fdfbfe), #fbfbfb;
  border-top: 0.063rem solid #e0dde1;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;