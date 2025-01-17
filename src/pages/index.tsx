import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/homepage-features/homepage-features';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
