import styled from "@emotion/styled";

import BaseBackdrop from "@/components/Backdrop";

export const MyRating = styled.span`
  display: block;
  ${({ theme }) => theme.typo["body-2-m"]}
  margin-bottom: 4px;
  margin-left: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
