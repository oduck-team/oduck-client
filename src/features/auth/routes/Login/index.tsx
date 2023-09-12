import { NavArrowLeft } from "iconoir-react";

import Button from "@/components/Button";
import Head from "@/components/Head";

import useLogin from "../../hooks/useLogin";

import SocialGroup from "./SocialGroup";
import { Header, HeaderContents, Main, Title, LoginSection } from "./style";

export default function Login() {
  const { handleClickBack, handleSocialLogin } = useLogin();

  return (
    <>
      <Head
        title="오덕 | 로그인"
        description="오덕에 회원가입 없이 빠르게 덕질을 시작해 보세요!"
      />
      <Header>
        <HeaderContents>
          <Button
            name="뒤로가기"
            icon={<NavArrowLeft aria-hidden />}
            styleType="text"
            color="neutral"
            onClick={handleClickBack}
          />
          <h1>로그인</h1>
        </HeaderContents>
      </Header>
      <Main htmlType={"main"}>
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
