import styled from "@emotion/styled";
import { ArrowLeft } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import ResponsiveContainer from "@/components/ResponsiveContainer";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Login() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleLogin = (site: string) => {
    window.location.href = `${BASE_URL}auth/${site}/login`;
  };

  return (
    <>
      <Head
        title="오덕 | 로그인"
        description="오덕에 회원가입 없이 빠르게 덕질을 시작해 보세요!"
      />
      <header>
        <HeaderContent>
          <Button
            name="뒤로가기"
            icon={<ArrowLeft />}
            styleType="text"
            color="neutral"
            onClick={handleClickBack}
          />
          {/* TODO: Logo component  */}
          <a>로고</a>
        </HeaderContent>
      </header>
      <main>
        <MainContent htmlType={"div"}>
          <h1>오덕에 로그인</h1>
          <Title>
            회원가입 없이 <br /> 빠르게 <span>덕질</span>을 시작해 보세요!
          </Title>
          <SoicalGroup>
            <li>
              <Button name="1" onClick={() => handleLogin("google")} isBlock>
                구글 로그인
              </Button>
            </li>
            <li>
              <Button name="1" onClick={() => handleLogin("naver")} isBlock>
                네이버 로그인
              </Button>
            </li>
            <li>
              <Button name="1" onClick={() => handleLogin("kakao")} isBlock>
                카카오 로그인
              </Button>
            </li>
          </SoicalGroup>
        </MainContent>
      </main>
    </>
  );
}

const HeaderContent = styled.div`
  ${({ theme }) => theme.container}
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 1rem;
  margin: 0 auto;

  /* TODO: Logo component */
  & > a {
    margin: 0 auto;
  }

  & > button {
    position: absolute;
    margin-left: 0;
  }
`;

const MainContent = styled(ResponsiveContainer)`
  padding: 0 1rem;
  margin: 0 auto;

  & > h1 {
    display: none;
  }
`;

const Title = styled.p`
  ${({ theme }) => theme.typo["heading-1"]}
  ${({ theme }) => theme.container}
  margin-top: 48px;
  margin-bottom: 24px;

  & > span {
    color: ${({ theme }) => theme.colors.primary["60"]};
  }
`;

const SoicalGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 24px;
`;
