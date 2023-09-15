import styled from "@emotion/styled";

export default function Discord() {
  return (
    <Container>
      <div>
        <span>오덕&nbsp;</span>
        <span>Discord</span>
      </div>
      <p>오덕 디스코드에 참여해 보세요!</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="22"
        viewBox="0 0 29 22"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.6175 1.88492C24.6175 1.88492 22.1878 0.24234 18.3431 0L17.8089 1.53485C17.8128 1.52399 16.1014 1.26639 15.9905 1.25543C15.0223 1.15961 13.9886 1.17038 13.0184 1.24567C12.9046 1.25452 11.1898 1.53192 11.1907 1.53494L10.6566 9.15527e-05C6.81183 0.242432 4.38214 1.88501 4.38214 1.88501C-1.35858 10.825 0.19025 18.1763 0.19025 18.1763C2.11261 20.2228 7.63947 22 7.63947 22L9.10773 19.4149L6.75812 18.3379L7.10529 17.6378C9.12482 18.6562 11.4383 19.2146 13.6907 19.3363C15.7054 19.4451 17.765 19.1317 19.6873 18.5265C19.8001 18.4911 19.9124 18.4544 20.0242 18.4164C20.2874 18.3272 20.5486 18.2311 20.8065 18.1277C20.9119 18.0853 21.8651 17.6085 21.8939 17.6378L22.241 18.3379L19.8914 19.4149L21.3602 22C21.3602 22 26.887 20.2228 28.8094 18.1763C28.8094 18.1763 30.3582 10.825 24.6175 1.88492ZM9.72199 14.864C11.1639 14.864 12.3323 13.5801 12.3323 11.9963C12.3323 10.4124 11.1639 9.12851 9.72199 9.12851C8.28058 9.12851 7.11212 10.4124 7.11212 11.9963C7.11212 13.5801 8.28058 14.864 9.72199 14.864ZM21.8875 11.9963C21.8875 13.5801 20.7191 14.864 19.2772 14.864C17.8358 14.864 16.6673 13.5801 16.6673 11.9963C16.6673 10.4124 17.8358 9.12851 19.2772 9.12851C20.7191 9.12851 21.8875 10.4124 21.8875 11.9963Z"
          fill="white"
        />
      </svg>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 32px);
  height: 80px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors["primary"]["60"]};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;

  span {
    ${({ theme }) => theme.typo["title-2-b"]};
    font-family: "Gmarket Sans";
    line-height: 120%;
  }

  span:first-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["05"]};
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }

  & > p {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["20"]};
  }

  & > svg {
    width: 29px;
    height: 22px;
    position: absolute;
    top: 29px;
    right: 30px;
  }
`;
