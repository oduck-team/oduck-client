import styled from "@emotion/styled";

export const SnackBarContainer = styled.div`
  --side-padding: 32px; // 16 * 2
  width: calc(100vw - var(--side-padding));
  max-width: calc(600px - var(--side-padding));
  opacity: 0;
  visibility: hidden;
  height: 40px;
  position: fixed;
  left: 50%;
  bottom: 74px; // 66 + 8
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.neutral[90]};
  color: ${({ theme }) => theme.colors.neutral["05"]};
  ${({ theme }) => theme.typo["body-2-m"]}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
