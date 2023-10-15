import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import Header from "@/components/Layout/Header";

import { TermsContainer } from "./style";

export default function EmailTerms() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Header.Left>
          <CaretLeft onClick={() => navigate(-1)} />
        </Header.Left>
        <Header.Center>개인정보 수집 및 이용 동의</Header.Center>
        <Header.Right />
      </Header>
      <TermsContainer>
        <p>
          오덕은 사용자들의 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및
          이용하며, 문의 답변 외에 사용하지 않고 사용자 정보 보호에 최선을
          다하고 있습니다.
        </p>
        <ul>
          <li>
            <h3>1. 개인정보의 수집/이용 목적</h3>
            <p>서비스 사용자들의 불편 사항, 건의 사항 접수 및 회신</p>
          </li>
          <li>
            <h3>2. 수집/이용하는 개인정보 항목</h3>
            <p>사용자 이메일 주소</p>
          </li>
          <li>
            <h3>3. 개인정보의 보유 및 이용 기간</h3>
            <p>접수 시점으로부터 3년간 보관 후 파기</p>
          </li>
          <li>
            <h3>4. 동의 거부 시 안내</h3>
            <p>
              위 동의는 1:1 문의 접수 및 회신을 위한 필수적 동의이므로 동의를
              하지 않을 시 답변 회신이 불가능합니다.
            </p>
          </li>
        </ul>
      </TermsContainer>
    </>
  );
}
