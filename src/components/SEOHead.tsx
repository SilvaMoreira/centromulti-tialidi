import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  type?: string;
  publishedAt?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
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
  jsonLd,
}: SEOHeadProps) => {
  const fullUrl = `${BASE_URL}${url}`;
  const fullTitle = `${title} | Centro Multidisciplinar Tia Lidi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
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
      {publishedAt && <meta property="article:section" content="Saúde Infantil" />}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

// Helper to build BlogPosting schema
export function buildBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  keywords: string[];
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `${BASE_URL}/blog/${post.slug}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Centro Multidisciplinar Tia Lidi",
      "url": BASE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Centro Multidisciplinar Tia Lidi",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    "image": `${BASE_URL}/og-image.jpg`,
    "keywords": post.keywords.join(", "),
    "inLanguage": "pt-BR",
    "about": {
      "@type": "MedicalBusiness",
      "name": "Centro Multidisciplinar Tia Lidi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aracaju",
        "addressRegion": "SE",
        "addressCountry": "BR",
      },
    },
  };
}

// Helper to build FAQ schema from content
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}
