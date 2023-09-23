import styled from "@emotion/styled";

import ResponsiveContainer from "@/components/ResponsiveContainer";

export const Header = styled.header`
  position: sticky;
  top: 0;
  max-width: 600px;
  margin: 0 auto;
`;

export const HeaderContents = styled.div`
  ${({ theme }) => theme.container}
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1rem;
  margin: 0 auto;

  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    margin: 0 auto;
  }

  & > button {
    position: absolute;
    margin-left: 0;
  }
`;

export const Main = styled(ResponsiveContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo["heading-1"]}
  margin-top: 52px;

  ${({ theme }) => theme.mq("md")} {
    text-align: center;
    margin-bottom: 80px;
  }

  & > span {
    color: ${({ theme }) => theme.colors.primary["60"]};
  }
`;

export const LoginSection = styled.section`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 50px;
  text-align: center;

  ${({ theme }) => theme.mq("md")} {
    position: relative;
  }

  & h1 {
    ${({ theme }) => theme.typo["body-3-r"]}
    color: ${({ theme }) => theme.colors.neutral["50"]};
    margin-bottom: 1rem;
  }
`;
