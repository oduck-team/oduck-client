import { Providers } from "@/features/auth/types";

import { SocialGroupContainer, SocialButton } from "./style";

interface SocialSite {
  name: string;
  provider: Providers;
  primaryColor: string;
  icon: React.ReactNode;
}

const socialSites: SocialSite[] = [
  {
    name: "카카오 로그인",
    provider: "kakao",
    primaryColor: "#FFE600",
    icon: <KakaoIcon />,
  },
  {
    name: "구글 로그인",
    provider: "google",
    primaryColor: "#E84437",
    icon: <GoogleIcon />,
  },
  {
    name: "네이버 로그인",
    provider: "naver",
    primaryColor: "#00C300",
    icon: <NaverIcon />,
  },
];

interface SocialGroupProps {
  onClick: (provider: Providers) => void;
}

export default function SocialGroup({ onClick }: SocialGroupProps) {
  return (
    <SocialGroupContainer>
      {socialSites.map((socialSite) => (
        <li key={socialSite.name}>
          <SocialButton
            type="button"
            name={socialSite.name}
            aria-label={socialSite.name}
            color={socialSite.primaryColor}
            onClick={() => onClick(socialSite.provider)}
          >
            <span>{socialSite.name}</span>
            {socialSite.icon}
          </SocialButton>
        </li>
      ))}
    </SocialGroupContainer>
  );
}

function KakaoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15.511 4C8.60051 4 3 8.42206 3 13.8795C3 17.392 5.32258 20.464 8.80645 22.2202L7.628 26.6194C7.58223 26.751 7.61656 26.8997 7.71953 26.997C7.78818 27.0656 7.87399 27.0999 7.97696 27.0999C8.05133 27.0999 8.12569 27.0656 8.19434 27.0141L13.2628 23.5932C13.9951 23.6962 14.7502 23.7591 15.5168 23.7591C22.4273 23.7591 28.0278 19.337 28.0278 13.8795C28.0278 8.42206 22.4273 4 15.5168 4"
        fill="#381E1E"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#clip0_1429_2146)">
        <path
          d="M16.5906 7.69068H13.6573C13.6573 7.69068 13.6573 7.69068 13.6573 7.69705H8.65668V10.9274H13.1894C13.1831 11.4626 12.9871 11.9086 12.6458 12.3163C11.6975 13.4759 10.2624 14.215 8.65668 14.215C5.79289 14.215 3.4791 11.8767 3.4791 8.99681C3.4791 6.11694 5.79921 3.77863 8.65668 3.77863C9.92737 3.77863 11.0906 4.24374 11.9946 5.01468L14.2073 2.67C12.7279 1.35112 10.7871 0.548321 8.66301 0.548321C4.0291 0.548321 0.273926 4.33294 0.273926 8.99681C0.273926 13.6607 4.0291 17.4517 8.66301 17.4517C10.2814 17.4517 11.786 16.9866 13.063 16.1901C15.4527 14.6992 16.6981 12.036 16.6981 8.99681C16.6981 8.55082 16.6665 8.11756 16.5969 7.69068"
          fill="white"
        />
        <path
          d="M27.7258 7.85633H24.35V4.454H22.0741V7.85633H18.6982V10.1437H22.0741V13.546H24.35V10.1437H27.7258V7.85633Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1429_2146">
          <rect
            width="27.4517"
            height="16.9034"
            fill="white"
            transform="translate(0.273926 0.548321)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function NaverIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M23.0717 20.605L16.6752 11.4145H11.3687V28.5855H16.9284V19.395L23.3249 28.5855H28.637V11.4145H23.0717V20.605Z"
        fill="white"
      />
    </svg>
  );
}
