import { useState } from 'react';
import { useStateLoading, LOADING_STATE } from './use-state-loading';
import { usePolling } from './use-polling';

type GasInfo = {
  legacyGasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
};

export type ResponseGasPrice = {
  safeLow: GasInfo;
  average: GasInfo;
  fast: GasInfo;
  fastest: GasInfo;
};

const POLLING_INTERVAL = 100000;

const useGetGasPrices = (skip?: boolean, interval?: number) => {
  const { loading, setLoading } = useStateLoading();
  const [error, setError] = useState(false);
  const [data, setData] = useState<ResponseGasPrice | null>();

  const apiRequest = async () => {
    try {
      setLoading(LOADING_STATE.LOADING);
      //const data = await fetch('https://apiv5.paraswap.io/prices/gas/1?eip1559=true');
      const dataJson = {
        safeLow: {
          legacyGasPrice: '36000000000',
          maxPriorityFeePerGas: '1510000000',
          maxFeePerGas: '72200000000',
        },
        average: {
          legacyGasPrice: '36000000000',
          maxPriorityFeePerGas: '1530000000',
          maxFeePerGas: '72220000000',
        },
        fast: {
          legacyGasPrice: '37000000000',
          maxPriorityFeePerGas: '1970000000',
          maxFeePerGas: '72660000000',
        },
        fastest: {
          legacyGasPrice: '37000000000',
          maxPriorityFeePerGas: '1970000000',
          maxFeePerGas: '72660000000',
        },
        blockData: { baseFeePerGasWei: '35344912210', blockNumber: 14607026 },
      };
      //const dataJson = await data.json();
      setData(dataJson as ResponseGasPrice);
      setError(false);
    } catch (err) {
      console.error(' Error on get the gasss ', err);
      setError(true);
    }
    setLoading(LOADING_STATE.FINISHED);
  };

  usePolling(apiRequest, interval ? interval : POLLING_INTERVAL, !!skip, [skip]);

  return { loading, data, error };
};

export default useGetGasPrices;
