import styled from "@emotion/styled";

export const TermsContainer = styled.div`
  width: 100%;
  padding: 16px 16px 0;
  color: ${({ theme }) => theme.colors["neutral"]["80"]};

  h3 {
    ${({ theme }) => theme.typo["title-3-b"]};
    margin-bottom: 8px;
  }

  p {
    ${({ theme }) => theme.typo["body-2-r"]};
  }

  ul {
    padding-top: 32px;
  }

  li {
    padding-bottom: 24px;
  }
`;
