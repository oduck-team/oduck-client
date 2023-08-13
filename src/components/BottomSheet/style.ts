import styled from "@emotion/styled";

import BaseBackdrop from "../Backdrop";

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.bottomSheet};
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  max-height: 80%;
  width: 100%;
  max-width: 600px;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px -5px 16px 0px rgba(0, 0, 0, 0.09);
  overflow: hidden;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 1rem;

  // 각 영역의 내용을 중앙에 배치
  .left,
  .center,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // 왼쪽 영역의 내용을 왼쪽에 배치
  .left {
    justify-content: flex-start;
  }

  // 오른쪽 영역의 내용을 오른쪽에 배치
  .right {
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
`;

export const Footer = styled.div`
  margin-top: 1rem;
`;
