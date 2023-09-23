import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: -40px;
  left: 16px;
`;

export const NickName = styled.h3`
  padding: 0 16px;
  ${({ theme }) => theme.typo["title-2-b"]};
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Introduce = styled.p`
  ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors.neutral[70]};
  width: 100%;
  margin-bottom: 4px;
  padding: 0 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const SeeMoreButton = styled.button`
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  align-self: flex-start;
  height: 18px;
  border: 0;
  padding: 0 16px;
  background-color: transparent;
  margin-bottom: 8px;
`;

export const StatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 18px;
`;
