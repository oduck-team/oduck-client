import styled from "@emotion/styled";

export const ReviewsRecentContainer = styled.section`
  padding: 54px 0 66px;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 70px;
`;

export const IconButton = styled.button`
  position: absolute;
  top: 0;
  left: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typo["title-3-b"]}
`;
