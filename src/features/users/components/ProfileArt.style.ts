import styled from "@emotion/styled";

export const ProfileArtContainer = styled.div`
  height: 160px;
`;

export const DefaultImage = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary[50]};
`;

export const CustomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
