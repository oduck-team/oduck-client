import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: solid 1px ${({ theme }) => theme.colors.neutral["20"]};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ContentContainer = styled.article`
  margin-top: 12px;
  margin-bottom: 16px;
  ${({ theme }) => theme.typo["body-3-r"]}

  ${({ theme }) => theme.mq("md")} {
    ${({ theme }) => theme.typo["body-2-r"]}
  }
`;

export const SpoilerButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  max-width: 368px;
  padding: 0 16px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  color: ${({ theme }) => theme.colors.neutral["50"]};
  cursor: pointer;

  & > span {
    color: ${({ theme }) => theme.colors.neutral["80"]};
  }
`;

export const ActionsContainer = styled.div``;
