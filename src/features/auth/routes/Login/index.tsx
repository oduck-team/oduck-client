import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Header from "@/components/Layout/Header";

import useLogin from "../../hooks/useLogin";

import SocialGroup from "./SocialGroup";
import { Main, Title, LoginSection } from "./style";

export default function Login() {
  const { handleSocialLogin } = useLogin();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Head
        title="오덕 | 로그인"
        description="오덕에 회원가입 없이 빠르게 덕질을 시작해 보세요!"
      />
      <Header>
        <Header.Left>
          <Button
            name="뒤로가기"
            icon={<CaretLeft aria-hidden />}
            variant="text"
            color="neutral"
            onClick={handleClickBack}
          />
        </Header.Left>
        <Header.Center>
          <h1>로그인</h1>
        </Header.Center>
      </Header>
      <Main>
        <Title>
          회원가입 없이 <br /> 빠르게 <span>덕질</span>을 <br />
          시작해 보세요!
        </Title>
        <LoginSection>
          <h1>SNS계정으로 간편하게 시작하기</h1>
          <SocialGroup onClick={handleSocialLogin} />
        </LoginSection>
      </Main>
    </>
  );
}
