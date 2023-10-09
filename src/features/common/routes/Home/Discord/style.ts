import styled from "@emotion/styled";

export const DiscordContainer = styled.div`
  width: calc(100% - 32px);
  height: 80px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors["primary"]["60"]};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
  cursor: pointer;
  transition: opacity 0.13s;

  & > a:hover {
    & > svg {
      scale: 1.1;
    }
  }

  span {
    ${({ theme }) => theme.typo["title-2-b"]};
    font-family: "Gmarket Sans";
    line-height: 120%;
  }

  span:first-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["05"]};
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }

  & p {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["20"]};
  }

  & svg {
    width: 29px;
    height: 22px;
    position: absolute;
    top: 29px;
    right: 30px;
    transition: scale 0.13s;
  }
`;
