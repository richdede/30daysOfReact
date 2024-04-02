import styled from "styled-components";

const Loading = () => {
  return (
    <DivStyled id="loading">
      <div id="circle1"></div>
      <div id="circle2"></div>
      <div id="circle3"></div>
    </DivStyled>
  );
};

export default Loading;

const DivStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.4rem;

  & #circle1 {
    width: 0.6rem;
    height: 0.6rem;
    background: grey;
    border-radius: 50%;
    animation: jump 0.6s infinite;
  }
  & #circle2 {
    width: 0.6rem;
    height: 0.6rem;
    background: grey;
    border-radius: 50%;
    animation: jump 0.6s infinite;
    animation-delay: 0.2s;
  }
  & #circle3 {
    width: 0.6rem;
    height: 0.6rem;
    background: grey;
    border-radius: 50%;
    animation: jump 0.6s infinite;
    animation-delay: 0.4s;
  }

  @keyframes jump {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-50%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;
