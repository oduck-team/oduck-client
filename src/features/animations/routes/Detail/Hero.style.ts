import styled from "@emotion/styled";

import BaseStat from "@/components/Stat";

export const Container = styled.div`
  padding-bottom: 24px;
`;

export const Banner = styled.div`
  position: relative;
  height: 256px;

  ${({ theme }) => theme.mq("sm")} {
    height: 368px;
  }

  ${({ theme }) => theme.mq("md")} {
    height: 440px;
  }
`;

export const Image = styled.div<{ url: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mq("md")} {
    background-position-y: -30px;
  }
`;

export const ImageGradient = styled.div`
  position: absolute;
  height: 256px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );

  ${({ theme }) => theme.mq("sm")} {
    height: 368px;
  }

  ${({ theme }) => theme.mq("md")} {
    height: 440px;
  }
`;

export const Info = styled.div`
  ${({ theme }) => theme.container}
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 56px;
  margin: 0 16px;
  ${({ theme }) => theme.mq("md")} {
    padding: 0 40px;
  }

  & > h1 {
    ${({ theme }) => theme.typo["title-1-b"]}
    color: #fff;
    text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.34);

    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["heading-1"]}
    }
  }

  & span {
    ${({ theme }) => theme.typo["body-3-m"]}
    color: #fff;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    opacity: 0.8;

    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["body-1-m"]}
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

export const Stat = styled(BaseStat)`
  transform: translateY(-50%);
`;
