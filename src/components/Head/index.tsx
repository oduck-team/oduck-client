import { Helmet } from "react-helmet-async";

interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({
  title = "오덕 | 애니 리뷰 커뮤니티",
  description = "",
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

      {/* Twitter meta tag list */}
      <meta property="twitter:domain" content="https://oduck.io"></meta>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
