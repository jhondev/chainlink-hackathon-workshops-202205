import React, { useEffect, useState } from 'react';
import { useMoralis, useWeb3Contract } from 'react-moralis';

import Button from '@/components/buttons/Button';

import { abi } from '../../../dapp-raffle/artifacts/contracts/Raffle.sol/Raffle.json';

const CONTRACT_ADDRS = '0xC7C88ED3C5870BFC2eB1A22487727D365d5B4fa1';

const LotteryEntrance = () => {
  const { isWeb3Enabled } = useMoralis();
  const [recentWinner, setRecentWinner] = useState('0');
  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: abi,
    contractAddress: CONTRACT_ADDRS,
    functionName: 'enterRaffle',
    msgValue: '100000000000000000', // 0.1 ETH
    params: {},
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: CONTRACT_ADDRS,
    functionName: 's_recentWinner',
    params: {},
  });

  useEffect(() => {
    if (!isWeb3Enabled) return;
    async function load() {
      const recentWinner = (await getRecentWinner()) as string;
      setRecentWinner(recentWinner);
    }
    load();
  }, [isWeb3Enabled, getRecentWinner]);

  return (
    <div>
      <Button
        onClick={async () => {
          await enterRaffle();
        }}
      >
        Enter Raffle
      </Button>
      <div>The recent winner is: {recentWinner}</div>
    </div>
  );
};

export default LotteryEntrance;
