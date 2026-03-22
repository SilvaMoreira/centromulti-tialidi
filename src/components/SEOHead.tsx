import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  type?: string;
  publishedAt?: string;
  image?: string;
}

const BASE_URL = "https://centromulti-tialidi.lovable.app";

export const SEOHead = ({
  title,
  description,
  url,
  keywords,
  type = "website",
  publishedAt,
  image = `${BASE_URL}/og-image.jpg`,
}: SEOHeadProps) => {
  const fullUrl = `${BASE_URL}${url}`;
  const fullTitle = `${title} | Centro Multidisciplinar Tia Lidi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Centro Multidisciplinar Tia Lidi" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {publishedAt && <meta property="article:author" content="Centro Multidisciplinar Tia Lidi" />}
    </Helmet>
  );
};
