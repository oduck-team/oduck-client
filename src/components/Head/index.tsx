import { Helmet } from "react-helmet-async";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Head({
  title = "오덕 | 애니 리뷰 커뮤니티",
  description = "애니 리뷰 커뮤니티 오덕입니다. 애니 리뷰를 중심으로 다양한 애니 커뮤니티를 만나보세요.",
  image = "https://oduck.io/logo/logo-rect.png",
}: HeadProps) {
  return (
    <Helmet>
      {/* HTML meta tag list */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook meta tag list */}
      <meta property="og:url" content="https://oduck.io" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter meta tag list */}
      <meta property="twitter:domain" content="https://oduck.io"></meta>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
