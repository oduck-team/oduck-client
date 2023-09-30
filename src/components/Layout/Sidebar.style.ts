import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Profile = styled(Link)`
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

export const Divider = styled.div`
  margin: 1rem 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral["30"]};
`;
