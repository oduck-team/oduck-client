import styled from "@emotion/styled";

export const NotExistAnimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(244, 244, 245, 1) 80%
  );
  border-radius: 5px;
  ${({ theme }) => theme.typo["body-3-m"]}
  color: ${({ theme }) => theme.colors.neutral[70]};

  & img {
    width: 80px;
    height: 80px;
    ${({ theme }) => theme.mq("sm")} {
      width: 100px;
      height: 100px;
      margin-top: 16px;
    }
  }

  & span {
    margin-top: 8px;

    ${({ theme }) => theme.mq("sm")} {
      margin-top: 16px;
    }
  }
`;
