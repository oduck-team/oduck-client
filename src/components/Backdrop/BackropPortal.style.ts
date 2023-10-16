import styled from "@emotion/styled";

import BaseBackdrop from "@/components/Backdrop";

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
