import Head from "next/head";

export default function Seo({ siteTitle }: { siteTitle?: string }) {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/images/2022/summer/heart.svg" />
      <link rel="apple-touch-icon" href="/images/2022/summer/heart.svg" />
      <link rel="mask-icon" href="/images/2022/summer/heart.svg" />
      <link rel="canonical" href="https://hyezolog.vercel.app" />
      <meta property="og:title" content="혜조로그" />
      <meta property="og:description" content="코딩과 일기가 뒤죽박죽 섞여 있어요" />
      <meta property="og:image" content="/images/2022/summer/heart.svg" />
      <meta property="og:url" content="https://hyezolog.vercel.app" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="all" />
      <meta name="description" content="프론트엔드 취준생 블로그" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          "혜조로그",
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
    </Head>
  );
}
