import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{title} | DatasistemasWeb</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}