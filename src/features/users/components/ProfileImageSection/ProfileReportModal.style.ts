import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typo["title-1-b"]}
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
`;

export const ReportSucessMessage = styled.div`
  --side-padding: 32px; // 16 * 2
  width: calc(100vw - var(--side-padding));
  max-width: calc(600px - var(--side-padding));
  height: 40px;
  position: fixed;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.neutral[90]};
  color: ${({ theme }) => theme.colors.neutral["05"]};
  ${({ theme }) => theme.typo["body-2-m"]}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
