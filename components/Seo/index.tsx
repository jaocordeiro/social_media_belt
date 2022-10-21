import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
    </Head>
  );
};

export default Seo;
