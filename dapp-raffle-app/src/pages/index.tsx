import * as React from 'react';
import { useMoralis } from 'react-moralis';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import LotteryEntrance from '@/components/LotteryEntrance';

export default function HomePage() {
  const { isWeb3Enabled } = useMoralis();

  return (
    <Layout>
      <Header />
      <main>
        <section className='bg-white'>
          {!isWeb3Enabled ? (
            <div>No metamask detected</div>
          ) : (
            <LotteryEntrance />
          )}
        </section>
      </main>
    </Layout>
  );
}
