import styled from "@emotion/styled";

export const Profile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 0;
  cursor: pointer;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo["title-2-b"]}
`;

export const NeedLogin = styled.span`
  ${({ theme }) => theme.typo["title-2-m"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;
