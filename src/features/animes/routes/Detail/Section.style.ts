import styled from "@emotion/styled";

export const SectionContainer = styled.section`
  padding: 16px;

  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["title-2-m"]}
    }
  }
`;
