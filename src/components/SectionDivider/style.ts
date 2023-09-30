import styled from "@emotion/styled";

export const SectionDividerContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > span:first-of-type {
    display: inline-block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutral["20"]};
  }

  & > span:last-of-type {
    display: inline-block;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.neutral["05"]};
  }
`;
