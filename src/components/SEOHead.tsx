import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://miles-with-smiles.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/images/MilesWithSmilesLogo.jpg`;

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object;
}

export default function SEOHead({ title, description, canonical, ogImage, schema }: SEOHeadProps) {
  const image = ogImage ?? DEFAULT_IMAGE;
  const fullUrl = `${BASE_URL}${canonical}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}