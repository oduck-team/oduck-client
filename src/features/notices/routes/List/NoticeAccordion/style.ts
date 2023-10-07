import styled from "@emotion/styled";

export const NoticeAccordionContainer = styled.article`
  width: full;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral["10"]};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo["body-2-m"]}
  color: ${({ theme }) => theme.colors.neutral["80"]};
`;

export const Category = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.neutral["90"]};
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 16px;
  margin: 16px 0;
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.neutral["80"]};
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  border-radius: 6px;
`;

export const Datetime = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]}
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;
