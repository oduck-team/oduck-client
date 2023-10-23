import styled from "@emotion/styled";

import { TextSize } from "./ReviewComent";

export const ReviewComentContainer = styled.p<{ textSize: TextSize }>`
  ${({ theme }) => theme.typo["body-2-r"]}
  ${({ theme }) => theme.colors.neutral[80]}
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  ${({ theme, textSize }) => textSize === "sm" && theme.typo["body-3-r"]}
`;
